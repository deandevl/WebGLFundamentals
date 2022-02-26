/**
 * Created by Rick on 2021-12-11.
 */
'use strict';

import {HeadData} from '../../positions-colors/HeadData.js';
import {vertex_shader, fragment_shader} from "./shaders.js";
import {ArrayBufferClass} from "web-gl-helpers";
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
  invert as m4_invert,
  targetTo as m4_targetTo
} from 'gl-matrix/esm/mat4';

import {toRadian} from 'gl-matrix/esm/common';

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
  const positionAttrib = new ArrayBufferClass(gl, position_type, program,'a_position_v4');
  // Define the head data
  const positions = new Float32Array(HeadData.positions)
  const primitiveType = gl.TRIANGLES;
  const prim_offset = 0;
  const triangle_count = positions.length / 3;

  const scaling_m4 = TransformsClass.getScaleMatrix([6, 6, 6]);
  const yRotation_m4 = TransformsClass.getXYZRotationMatrix('y', 180);

  const headTransform_m4 = m4_create();
  m4_multiply(headTransform_m4, scaling_m4, yRotation_m4);
  for(let i = 0; i < positions.length; i += 3){
    let v_m3 = vectorMultiply(
      [positions[i], positions[i + 1], positions[i + 2], 1],
      headTransform_m4
    )
    positions[i] = v_m3[0];
    positions[i + 1] = v_m3[1];
    positions[i + 2] = v_m3[2];
  }
  // Set the position data
  positionAttrib.setData(positions, gl.STATIC_DRAW);

  // Set up varying color attribute for 'a_color_v4'
  const color_type = gl.UNSIGNED_BYTE; // the data is UNSIGNED_BYTE
  const colorAttrib = new ArrayBufferClass(gl, color_type, program,'a_color_v4');
  // Define the head color data
  const normals_list_m3 = HeadData.normals;
  const colors_list = new Uint8Array(normals_list_m3.length);
  let offset = 0;
  for(let i = 0; i < colors_list.length; i += 3){
    for(let ii = 0; ii < 3; ++ii){
      colors_list[offset] = (normals_list_m3[offset] * 0.5 + 0.5) * 255;
      ++offset;
    }
  }
  colorAttrib.setData(colors_list, gl.STATIC_DRAW);

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

  // Define the initial values for the perspective projection
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 1;
  const zFar = 3000;
  const fov = 60; // Note: fov in degrees does not change
  // Compute the perspective/projection matrix with a constant fov
  const perspective_m4 = TransformsClass.getPerspectiveMatrix(fov, aspect, zNear, zFar);

  // Set initial target position in 3D space
  let target_position_v3 = [0, 200, 300];
  // Set initial target angle position
  let target_angle = 0;
  // Set constant target radius
  const target_radius = 300;

  function updateTargetAngle(value){
    // Redefine target position in the x-z plane
    const angle_radians = toRadian(value);
    target_position_v3[0] = Math.sin(angle_radians) * target_radius;
    target_position_v3[2] = Math.cos(angle_radians) * target_radius;
    drawScene();
  }

  function updateTargetHeight(value){
    // Redefine target position along the y axis
    target_position_v3[1] = value;
    drawScene();
  }

  // Create a camera view matrix which when applied to head locations
  //   will put them in perspective view and turn heads toward the camera
  const camera_to_target_v = [0, -100, 0];
  const camera_position_v = [500, 300, 500];
  // Define 'up' on the Y axis
  const up = [0, 1, 0];

  // Compute the matrix that makes/transforms the camera to look at the target
  const cameraToTarget_m4 = m4_create();
  m4_targetTo(cameraToTarget_m4, camera_position_v, camera_to_target_v, up);

  // Make a view matrix from the cameraToTarget_m4 matrix
  // Inverting cameraToTarget_m4 provides a transform for
  //   everything else in the scene
  const view_m4 = m4_create();
  m4_invert(view_m4, cameraToTarget_m4);

  // Compute a view projection/perspective matrix to be used
  //   to transform each F
  const viewPerspective_m4 = m4_create();
  m4_multiply(viewPerspective_m4, perspective_m4, view_m4);


  // Define a function for drawing a head
  function drawHead(head_transform_m4){
    const uniform_m4 = m4_create();
    m4_multiply(uniform_m4, viewPerspective_m4, head_transform_m4);
    // Set the 'u_matrix' shader attribute
    matrixUniform.setData(uniform_m4);

    // Draw the head
    gl.drawArrays(primitiveType, prim_offset, triangle_count);
  }

  // Define a function for drawing the scene
  function drawScene(){
    initializeContext(gl);

    // Draw many heads in a grid
    const deep = 5;
    const across = 5;
    let cameraToTarget_m4 = m4_create();
    for (let zz = 0; zz < deep; ++zz) {
      let v = zz / (deep - 1);
      let z = (v - .5) * deep * 150;
      for (let xx = 0; xx < across; ++xx) {
        let u = xx / (across - 1);
        let x = (u - .5) * across * 150;
        let head_loc_v3 = [x, 0, z]
        m4_targetTo(cameraToTarget_m4, head_loc_v3, target_position_v3, up);
        drawHead(cameraToTarget_m4);
      }
    }

    // Draw the single target head
    const single_head_translation_m4 = TransformsClass.getTranslationMatrix(target_position_v3);
    drawHead(single_head_translation_m4);
  }

  // Set up the user interface for changes to the parameters
  // Define the target angle
  const targetAngle_slider = document.getElementById('targetAngle');
  const targetAngle_output = document.getElementById('targetAngle_output');
  targetAngle_slider.step = 1;
  targetAngle_slider.min = -360;
  targetAngle_slider.max = 360;

  targetAngle_slider.value = target_angle;
  targetAngle_output.textContent = target_angle;

  targetAngle_slider.addEventListener('input', ()=> {
    const targetAngle = +targetAngle_slider.value;
    targetAngle_output.textContent = targetAngle_slider.value;
    updateTargetAngle(targetAngle);
  });

  // Define the target angle
  const targetHeight_slider = document.getElementById('targetHeight');
  const targetHeight_output = document.getElementById('targetHeight_output');
  targetHeight_slider.step = 1;
  targetHeight_slider.min = 50;
  targetHeight_slider.max = 300;

  targetHeight_slider.value = target_position_v3[1];
  targetHeight_output.textContent = target_position_v3[1];

  targetHeight_slider.addEventListener('input', ()=> {
    const targetHeight = +targetHeight_slider.value;
    targetHeight_output.textContent = targetHeight_slider.value;
    updateTargetHeight(targetHeight);
  });

  // Draw the initial scene
  drawScene();
}catch (e) {
  console.log(e);
}
