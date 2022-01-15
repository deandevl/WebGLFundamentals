/**
 * Created by Rick on 2021-12-11.
 */
'use strict';

import {F_3D_positions_list, F_3D_colors_list} from '../../positions-colors/F-3D.js';
import {vertex_shader, fragment_shader} from "./shaders.js";
import {AttributeClass} from "web-gl-helpers";
import {UniformClass} from "web-gl-helpers";
import {TransformsClass} from "web-gl-helpers";
import {resizeCanvasToDisplaySize} from "web-gl-helpers"
import {createShader} from "web-gl-helpers";
import {createGLcontext} from "web-gl-helpers";
import {createProgram} from "web-gl-helpers";
import {initializeContext} from "web-gl-helpers";

import {
  create as m4_create,
  multiply as m4_multiply,
  targetTo as m4_targetTo,
  invert as m4_invert
} from 'gl-matrix/esm/mat4';

function vectorMultiply(v,m){
  let dst = [];
  for(let i = 0; i < 4; ++i){
    dst[i] = 0.0;
    for(let j = 0; j < 4; ++j){
      dst[i] += v[j] * m[j * 4 + i];
    }
  }
  return dst;
}

try {
  const context = createGLcontext('my_canvas');
  const gl = context.gl;
  const canvas = context.canvas;

  // Turn on culling. By default backfacing triangles
  //   will be culled.
  gl.enable(gl.DEPTH_TEST); // enable depth testing
  gl.enable(gl.CULL_FACE);  // enable culling of backfacing triangles
  gl.depthFunc(gl.LEQUAL); // near things obscure far things

  // Check canvas width and height
  resizeCanvasToDisplaySize(canvas);

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Create shader objects
  const vShader = createShader(gl, gl.VERTEX_SHADER, vertex_shader);
  const fShader = createShader(gl, gl.FRAGMENT_SHADER, fragment_shader);

  // Create a WebGLProgram
  const program = createProgram(gl, vShader, fShader);
  // Tell context to use our program (a pair of shaders)
  gl.useProgram(program);

  // Set up position attribute for 'a_position'
  // Create and set the attribute position data (a_position_v4)
  const position_type = gl.FLOAT; // the data is 32bit floats
  const positionAttrib = new AttributeClass(gl, position_type, program,'a_position_v4');

  //Center the position the F around the origin and flip it around.
  const F_transform_m4 = TransformsClass.getXYZRotationMatrix('x', 180);
  const F_translate_m4 = TransformsClass.getTranslationMatrix([-50, -75, -15])
  m4_multiply(F_transform_m4, F_transform_m4, F_translate_m4);
  for(let i = 0; i < F_3D_positions_list.length; i += 3){
    const vector = vectorMultiply(
      [F_3D_positions_list[i],
        F_3D_positions_list[i+1],
        F_3D_positions_list[i+2],
        1],F_transform_m4);
    F_3D_positions_list[i] = vector[0];
    F_3D_positions_list[i+1] = vector[1];
    F_3D_positions_list[i+2] = vector[2];
  }
  // Set the attribute 'a_position_v4' to the newly transformed F
  positionAttrib.setData(F_3D_positions_list, gl.STATIC_DRAW);

  // Set up varying color attribute for 'a_color_v4'
  const color_type = gl.UNSIGNED_BYTE; // the data is UNSIGNED_BYTE
  const colorAttrib = new AttributeClass(gl, color_type, program,'a_color_v4');
  colorAttrib.setData(F_3D_colors_list, gl.STATIC_DRAW);

  // Associate shader attributes with corresponding data buffers
  const vao = gl.createVertexArray();
  // Make vao the one we're currently working with
  gl.bindVertexArray(vao);

  // Specify how to pull the position data out
  {
    const size = 3; // 3 components per iteration
    const normalize = false; // don't normalize the data
    const stride = 0; // 0 = move forward size * sizeof(type) each
    //  iteration to get the next position
    const offset = 0; // start at the beginning of the buffer
    positionAttrib.bufferFormat(size, normalize, stride, offset);
  }

  // Specify how to pull the color data out
  {
    const size = 3; // 3 components per iteration
    const normalize = true; // don't normalize the data
    const stride = 0; // 0 = move forward size * sizeof(type) each
    //  iteration to get the next position
    const offset = 0; // start at the beginning of the buffer
    colorAttrib.bufferFormat(size, normalize, stride, offset);
  }

  // Set up the uniforms
  // Set up matrix uniform 'u_matrix'
  const matrixUniform = new UniformClass(gl, program, 'u_matrix_m4', 'uniformMatrix4fv')

  // Define drawing parameters
  const primitiveType = gl.TRIANGLES;
  const prim_offset = 0;
  const triangle_count = 16 * 6;

  // Define the initial values for the transform parameters
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 1;
  const zFar = 2000;
  const fov = 60;
  //Compute the perspective/projection matrix
  const perspective_m4 = TransformsClass.getPerspectiveMatrix(fov, aspect, zNear, zFar);

  // Define camera related values
  const numFs = 5;
  const radius = 200;
  let cameraAngle = 0;
  const targetPosition = [radius, 0, 0]

  // Define a function for drawing the scene
  function drawScene(){
    initializeContext(gl);

    // Compute the position of the first F as the 'target' in the x-z plane
    // Camera is placed initially at the origin [0, 0, radius * 1.5]
    // When the camera is repositioned via 'cameraAngle' compute its new location
    const camera_m4 = TransformsClass.getXYZRotationMatrix('y',cameraAngle);
    const camera_translation_m4 = TransformsClass.getTranslationMatrix([0, 0, radius * 1.5]);
    m4_multiply(camera_m4, camera_m4, camera_translation_m4);


    // Get the camera's new position from the above matrix
    const cameraPosition = [
      camera_m4[12],
      camera_m4[13],
      camera_m4[14],
    ]

    // Define 'up' on the Y axis
    const up = [0, 1, 0];

    // Compute the matrix that makes/transforms the camera to look at the target
    const cameraToTarget_m4 = m4_create();
    m4_targetTo(cameraToTarget_m4, cameraPosition, targetPosition, up);

    // Make a view matrix from the cameraToTarget_m4 matrix
    // Inverting cameraToTarget_m4 provides a transform for
    //   everything else in the scene
    const view_m4 = m4_create();
    m4_invert(view_m4, cameraToTarget_m4);

    // Compute a view projection/perspective matrix to be used
    //   to transform each F
    const viewPerspective_m4 = m4_create();
    m4_multiply(viewPerspective_m4, perspective_m4, view_m4);

    // Draw the F geometry 5 times around the circle with radius 'radius'
    // Note that we are drawing in the x-z plane
    for(let i = 0; i < numFs; ++i){
      let angle = i * Math.PI * 2 / numFs;
      let x = Math.cos(angle) * radius;
      let z = Math.sin(angle) * radius;

      // Starting with the viewPerspectiveMatrix
      //   compute a transform matrix for each F
      let F_transform_m4 = m4_create();
      let translate_m4 = TransformsClass.getTranslationMatrix([x, 0, z]);
      m4_multiply(F_transform_m4, viewPerspective_m4, translate_m4);

      // Set the new transform by assigning the uniform 'u_matrix'
      matrixUniform.setData(F_transform_m4);

      // Draw the transformed F
      gl.drawArrays(primitiveType, prim_offset, triangle_count);
    }
  }

  // Update functions called by user interface updates to parameters
  function updateCameraAngle(value){
    cameraAngle = value;
    drawScene();
  }

  // Set up the user interface for changes to the parameters
  // Define the camera angle
  const cameraAngle_slider = document.getElementById('cameraAngle');
  const cameraAngle_output = document.getElementById('cameraAngle_output');
  cameraAngle_slider.step = 1;
  cameraAngle_slider.min = -360;
  cameraAngle_slider.max = 360;

  cameraAngle_slider.value = cameraAngle;
  cameraAngle_output.textContent = cameraAngle;

  cameraAngle_slider.addEventListener('input', ()=> {
    const cameraAngle = +cameraAngle_slider.value;
    cameraAngle_output.textContent = cameraAngle_slider.value;
    updateCameraAngle(cameraAngle);
  });

  // Draw the initial scene
  drawScene();
}catch (e) {
  console.log(e);
}
