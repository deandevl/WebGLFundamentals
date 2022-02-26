/**
 * Created by Rick on 2021-12-11.
 */
'use strict';

import {F_3D_positions_list, F_3D_colors_list, F_3D_normals_list} from '../../positions-colors/F-3D.js';
import {vertex_shader, fragment_shader} from "./shaders.js";
import {ArrayBufferClass} from "web-gl-helpers";
import {UniformClass} from "web-gl-helpers";
import {TransformsClass} from "web-gl-helpers";
import {resizeCanvasToDisplaySize} from "web-gl-helpers"
import {createShader} from "web-gl-helpers";
import {createGLcontext} from "web-gl-helpers";
import {createProgram} from "web-gl-helpers";
import {initializeContext} from "web-gl-helpers";

import {toRadian} from 'gl-matrix/esm/common';

import {
  create as m4_create,
  multiply as m4_multiply,
  invert as m4_invert,
  targetTo as m4_targetTo,
  transpose as m4_transpose
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

  // Set up vec4 position attribute for 'a_position_v4' from vertex shader
  const position_type = gl.FLOAT; // the data is 32bit floats
  const positionAttrib = new ArrayBufferClass(gl, position_type, program, 'a_position_v4');
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
  positionAttrib.setData(F_3D_positions_list, gl.STATIC_DRAW);

  // Set up the vec3 normal attribute for 'a_normal_v3' from vertex shader
  // Create and set the attribute normal data
  const normal_type = gl.FLOAT; // the data is 32bit floats
  const normalAttrib = new ArrayBufferClass(gl, normal_type, program, 'a_normal_v3');
  normalAttrib.setData(F_3D_normals_list, gl.STATIC_DRAW);

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

  // Specify how to pull the normal data out
  {
    const size = 3; // 3 components per iteration
    const normalize = false; // don't normalize the data
    const stride = 0; // 0 = move forward size * sizeof(type) each
    //  iteration to get the next position
    const offset = 0; // start at the beginning of the buffer
    normalAttrib.bufferFormat(size, normalize, stride, offset);
  }

  // Set up the uniforms
  // Set up mat4 uniform 'u_trs_m4' from vertex shader
  const trsUniform = new UniformClass(gl, program, 'u_trs_m4', 'uniformMatrix4fv');

  // Set up mat4 uniform 'u_trsViewPerspective_m4' from vertex shader
  const trsViewPerspectiveUniform = new UniformClass(gl, program, 'u_trsViewPerspective_m4', 'uniformMatrix4fv')

  // Set up mat4 uniform 'u_trsInverseTranspose_m4' from vertex shader
  const trsInverseTransposeUniform = new UniformClass(gl, program, 'u_trsInverseTranspose_m4', 'uniformMatrix4fv')

  // Set up vec3 uniform 'u_lightPosition_v3' from vertex shader
  const lightPositionUniform = new UniformClass(gl, program, 'u_lightPosition_v3', 'uniform3fv');
  const lightPosition = [40, 60, 120];
  lightPositionUniform.setData(lightPosition);

  // Set up the vec4 uniform 'u_color_v4' from fragment shader
  const colorUniform = new UniformClass(gl, program, 'u_color_v4', 'uniform4fv');
  colorUniform.setData([0.2, 1.0, 0.2, 1]); // green

  // Set up the vec3 uniform 'u_lightDirection_v3' from fragment shader
  const lightDirectionUniform = new UniformClass(gl, program, 'u_lightDirection_v3', 'uniform3fv');
  lightDirectionUniform.setData([0, 0, 1]);

  // Set up the float uniform 'u_lightLimit_f' from fragment shader
  const limitUniform = new UniformClass(gl, program, 'u_lightLimit_f', 'uniform1f');
  let lightLimit = 10.0;
  limitUniform.setData(toRadian(lightLimit));

  // Set up a camera matrix
  const cameraPosition = [0, 0, 200];
  const targetPosition = [0, 35, 0];
  // Define 'up' on the Y axis
  const up = [0, 1, 0];
  // Compute the matrix that makes/transforms the camera to look at the target
  const cameraToTarget_m4 = m4_create();
  m4_targetTo(cameraToTarget_m4, cameraPosition, targetPosition, up);
  // Make a view matrix from the camera matrix
  const view_m4 = m4_create();
  m4_invert(view_m4, cameraToTarget_m4);

  const primitiveType = gl.TRIANGLES;
  const prim_offset = 0;
  const triangle_count = 16 * 6;

  // Define the initial values for the transform parameters
  let translation = [0, 0, 0];
  let rotation  = [0, 0, 0];
  let scale = [1, 1, 1];

  // Define the perspective parameters
  let fov = 100;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 1;
  const zFar = 2000;

  let lightRotation = [0,0];

  // define a function for drawing the scene
  function drawScene(){
    initializeContext(gl, [1.0, 1.0, 0.0, 0.5]);

    // Get the current orientation matrices of F
    const translate_m4 = TransformsClass.getTranslationMatrix(translation);
    const x_rotate_m4 = TransformsClass.getXYZRotationMatrix('x',rotation[0]);
    const y_rotate_m4 = TransformsClass.getXYZRotationMatrix('y',rotation[1]);
    const z_rotate_m4 = TransformsClass.getXYZRotationMatrix('z',rotation[2]);
    const scale_m4 = TransformsClass.getScaleMatrix(scale);

    // Create transform_m4 by multiplying the matrices
    const trs_m4 = m4_create();
    m4_multiply(trs_m4, translate_m4, x_rotate_m4);
    m4_multiply(trs_m4, trs_m4, y_rotate_m4);
    m4_multiply(trs_m4, trs_m4, z_rotate_m4);
    m4_multiply(trs_m4, trs_m4, scale_m4);
    // Set the 'u_trs_m4' uniform of the vertex shader
    trsUniform.setData(trs_m4);

    // Set the 'u_trsViewPerspective_m4' uniform of vertex shader
    // Get the perspective matrix
    const perspective_m4 = TransformsClass.getPerspectiveMatrix(fov, aspect, zNear, zFar);
    // Compute a view-perspective matrix
    const viewPerspective_m4 = m4_create();
    m4_multiply(viewPerspective_m4, perspective_m4, view_m4);
    // Compute a trs-view-perspective matrix
    const trsViewPerspective_m4 = m4_create();
    m4_multiply(trsViewPerspective_m4, viewPerspective_m4, trs_m4);
    trsViewPerspectiveUniform.setData(trsViewPerspective_m4);

    // Set the 'u_trsInverseTranspose_m4' uniform of vertex shader
    const trsInverse_m4 = m4_create();
    m4_invert(trsInverse_m4, trs_m4);
    const trsInverseTranspose_m4 = m4_create();
    m4_transpose(trsInverseTranspose_m4, trsInverse_m4);
    trsInverseTransposeUniform.setData(trsInverseTranspose_m4);

    // Set the 'u_lightDirection_v3' uniform of fragment shader
    const lightDirection = m4_create();
    m4_targetTo(lightDirection, lightPosition, targetPosition, up);
    const x_light_rotate_m4 = TransformsClass.getXYZRotationMatrix('x',lightRotation[0]);
    const y_light_rotate_m4 = TransformsClass.getXYZRotationMatrix('y',lightRotation[1]);
    m4_multiply(lightDirection, lightDirection, x_light_rotate_m4);
    m4_multiply(lightDirection, lightDirection, y_light_rotate_m4);
    lightDirectionUniform.setData([-lightDirection[8], -lightDirection[9], -lightDirection[10]]);

    // Set the 'u_lightLimit_f' uniform of fragment shader
    limitUniform.setData(Math.cos(toRadian(lightLimit)));

    // draw the scene
    gl.drawArrays(primitiveType, prim_offset, triangle_count);
  }

  // update functions called by user interface updates to parameters
  function updateFieldOfView(value){
    fov = value;
    drawScene();
  }

  function updateTranslation(index, value){
    translation[index] = value;
    drawScene();
  }

  function updateRotation(index, value){
    rotation[index] = value;
    drawScene();
  }

  function updateScale(index, value){
    scale[index] = value;
    drawScene();
  }

  function updateLightRotation(index, value){
    lightRotation[index] = value;
    drawScene();
  }

  function updateLightLimit(value){
    lightLimit = value;
    drawScene();
  }

  // set up the user interface for changes to the parameters
  // define the z fudge factor value
  const fieldOfView_slider = document.getElementById('fieldOfView');
  const fieldOfView_output = document.getElementById('fieldOfView_output');

  fieldOfView_slider.step = 0.2;
  fieldOfView_slider.min = 1;
  fieldOfView_slider.max = 179;

  fieldOfView_slider.value = fov;
  fieldOfView_output.textContent = fov;

  fieldOfView_slider.addEventListener('input', ()=> {
    const fieldOfView = +fieldOfView_slider.value;
    fieldOfView_output.textContent = fieldOfView_slider.value;
    updateFieldOfView(fieldOfView);
  });

  // define x, y, z translation slider attributes and event callbacks
  const x_translate_slider = document.getElementById('x_translate');
  const y_translate_slider = document.getElementById('y_translate');
  const z_translate_slider = document.getElementById('z_translate');

  const x_translate_output = document.getElementById('x_translate_output');
  const y_translate_output = document.getElementById('y_translate_output');
  const z_translate_output = document.getElementById('z_translate_output');

  x_translate_slider.min = -200;
  x_translate_slider.max = 200;
  x_translate_slider.step = 2;
  x_translate_slider.value = translation[0];
  x_translate_output.textContent = translation[0];

  y_translate_slider.min = -200;
  y_translate_slider.max = 200;
  y_translate_slider.step = 2;
  y_translate_slider.value = translation[1];
  y_translate_output.textContent = translation[1];

  z_translate_slider.min = -1000;
  z_translate_slider.max = 0;
  z_translate_slider.step = 5;
  z_translate_slider.value = translation[2];
  z_translate_output.textContent = translation[2];

  x_translate_slider.addEventListener('input', () => {
    const x_translate = +x_translate_slider.value;
    x_translate_output.textContent = x_translate;
    updateTranslation(0, x_translate);
  });
  y_translate_slider.addEventListener('input', () => {
    const y_translate =  +y_translate_slider.value;
    y_translate_output.textContent = y_translate;
    updateTranslation(1, y_translate);
  })
  z_translate_slider.addEventListener('input', () => {
    const z_translate =  +z_translate_slider.value;
    z_translate_output.textContent = z_translate;
    updateTranslation(2, z_translate);
  })

  // define rotate sliders and its event callback
  const x_rotate_slider = document.getElementById('x_rotate');
  const y_rotate_slider = document.getElementById('y_rotate');
  const z_rotate_slider = document.getElementById('z_rotate');

  const x_rotate_slider_output = document.getElementById('x_rotate_output');
  const y_rotate_slider_output = document.getElementById('y_rotate_output');
  const z_rotate_slider_output = document.getElementById('z_rotate_output');

  x_rotate_slider.step = y_rotate_slider.step = z_rotate_slider.step = 5.0;
  x_rotate_slider.min = y_rotate_slider.min = z_rotate_slider.min = 0.0;
  x_rotate_slider.max = y_rotate_slider.max = z_rotate_slider.max = 360.0;

  x_rotate_slider.value = x_rotate_slider_output.textContent = rotation[0];
  y_rotate_slider.value = y_rotate_slider_output.textContent = rotation[1];
  z_rotate_slider.value = z_rotate_slider_output.textContent = rotation[2];

  x_rotate_slider.addEventListener('input', () => {
    const rotate = +x_rotate_slider.value;
    x_rotate_slider_output.textContent = rotate;
    updateRotation(0, rotate);
  })
  y_rotate_slider.addEventListener('input', () => {
    const rotate = +y_rotate_slider.value;
    y_rotate_slider_output.textContent = rotate;
    updateRotation(1, rotate);
  })
  z_rotate_slider.addEventListener('input', () => {
    const rotate = +z_rotate_slider.value;
    z_rotate_slider_output.textContent = rotate;
    updateRotation(2, rotate);
  })

  // define x, y scale slider attributes and event callbacks
  const x_scale_slider = document.getElementById('x_scale');
  const y_scale_slider = document.getElementById('y_scale');
  const z_scale_slider = document.getElementById('z_scale');

  const x_scale_output = document.getElementById('x_scale_output');
  const y_scale_output = document.getElementById('y_scale_output');
  const z_scale_output = document.getElementById('z_scale_output');

  x_scale_slider.step = y_scale_slider.step = z_scale_slider.step = 0.1;
  x_scale_slider.min = y_scale_slider.min = z_scale_slider.min = -5.0;
  x_scale_slider.max = y_scale_slider.max = z_scale_slider.max = 5.0;

  x_scale_slider.value = x_scale_output.textContent = scale[0];
  y_scale_slider.value = y_scale_output.textContent = scale[1];
  z_scale_slider.value = z_scale_output.textContent = scale[2];

  x_scale_slider.addEventListener('input', () => {
    const x_scale = +x_scale_slider.value;
    x_scale_output.textContent = x_scale;
    updateScale(0,x_scale);
  });
  y_scale_slider.addEventListener('input', () => {
    const y_scale = +y_scale_slider.value;
    y_scale_output.textContent = y_scale
    updateScale(1,y_scale);
  });
  z_scale_slider.addEventListener('input', () => {
    const z_scale = +z_scale_slider.value;
    z_scale_output.textContent = z_scale
    updateScale(2,z_scale);
  });

  // define X and Y light rotation
  const x_light_rotate_slider = document.getElementById('x_light_rotate');
  const y_light_rotate_slider = document.getElementById('y_light_rotate');

  const x_light_rotate_output = document.getElementById('x_light_rotate_output');
  const y_light_rotate_output = document.getElementById('y_light_rotate_output');

  x_light_rotate_slider.value = x_light_rotate_output.textContent = lightRotation[0];
  y_light_rotate_slider.value = y_light_rotate_output.textContent = lightRotation[1];

  x_light_rotate_slider.step = y_light_rotate_slider.step = 0.1;
  x_light_rotate_slider.min = y_light_rotate_slider.min = -2.0;
  x_light_rotate_slider.max = y_light_rotate_slider.max = 2.0;

  x_light_rotate_slider.addEventListener('input', () => {
    const x_light_rotate = +x_light_rotate_slider.value;
    x_light_rotate_output.textContent = x_light_rotate;
    updateLightRotation(0, x_light_rotate);
  });
  y_light_rotate_slider.addEventListener('input', () => {
    const y_light_rotate = +y_light_rotate_slider.value;
    y_light_rotate_output.textContent = y_light_rotate;
    updateLightRotation(1, y_light_rotate);
  });

  // define light limit
  const light_limit_slider = document.getElementById('light_limit');
  const light_limit_output = document.getElementById('light_limit_output');
  light_limit_slider.value = light_limit_output.textContent = lightLimit;
  light_limit_slider.step = 0.2;
  light_limit_slider.min = 0;
  light_limit_slider.max = 180;

  light_limit_slider.addEventListener('input', () => {
    const light_limit = +light_limit_slider.value;
    light_limit_output.textContent = light_limit;
    updateLightLimit(light_limit);
  });

  // draw the initial scene
  drawScene();
}catch (e) {
  console.log(e);
}
