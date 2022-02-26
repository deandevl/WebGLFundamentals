/**
 * Created by Rick on 2021-12-11.
 */
'use strict';

import {F_3D_positions_list, F_3D_texcoords_list} from '../../positions-colors/F-3D.js';
import {vertex_shader, fragment_shader} from "./shaders.js";
import {ArrayBufferClass} from "web-gl-helpers";
import {UniformClass} from "web-gl-helpers";
import {TransformsClass} from "web-gl-helpers";
import {Texture2DClass} from "web-gl-helpers";
import {resizeCanvasToDisplaySize} from "web-gl-helpers"
import {createShader} from "web-gl-helpers";
import {createGLcontext} from "web-gl-helpers";
import {createProgram} from "web-gl-helpers";
import {initializeContext} from "web-gl-helpers";

import {
  create as m4_create,
  multiply as m4_multiply
} from 'gl-matrix/esm/mat4';

function requestCORSIfNotSameOrigin(img, url) {
  if ((new URL(url, window.location.href)).origin !== window.location.origin) {
    img.crossOrigin = "";
  }
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

  // Set up position attribute for 'a_position_v4'
  // Create and set the attribute position data (a_position_v4)
  const positionAttrib = new ArrayBufferClass(gl, gl.FLOAT, program,'a_position_v4');
  positionAttrib.setData(F_3D_positions_list, gl.STATIC_DRAW);

  // Set up varying texture coordinates attribute for 'a_texcoord_v2'
  const textureAttrib = new ArrayBufferClass(gl, gl.FLOAT, program,'a_texcoord_v2');
  textureAttrib.setData(F_3D_texcoords_list, gl.STATIC_DRAW);

  // Associate shader attributes with corresponding data buffers
  const vao = gl.createVertexArray();
  // Make vao the one we're currently working with
  gl.bindVertexArray(vao);

  // Specify how to pull the position data out set it
  {
    const size = 3; // 3 components per iteration
    const normalize = false; // don't normalize the data
    const stride = 0; // 0 = move forward size * sizeof(type) each
    //  iteration to get the next position
    const offset = 0; // start at the beginning of the buffer
    positionAttrib.bufferFormat(size, normalize, stride, offset);
  }

  // Specify how to pull the texture coordinate data out and set it
  {
    const size = 2 // 2 components per iteration
    const normalize = true; // normalize the data
    const stride = 0; // 0 = move forward size * sizeof(type) each
    //  iteration to get the next position
    const offset = 0; // start at the beginning of the buffer
    textureAttrib.bufferFormat(size, normalize, stride, offset);
  }

  // Set up the uniforms
  // Set up matrix uniform 'u_matrix_m4'
  const matrixUniform = new UniformClass(gl, program, 'u_matrix_m4', 'uniformMatrix4fv')

  const primitiveType = gl.TRIANGLES;
  const prim_offset = 0;
  const triangle_count = 16 * 6;

  // Animation related parameters
  let x_rotation = 0;
  let y_rotation = 0;
  const rotationSpeed = 10.2;
  let then = 0;
  let start_rotation = true;

  // Define the values for the perspective matrix
  let fov = 60;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 1;
  const zFar = 2000;

  // Define the initial values for the transform parameters
  let translation = [-150, 60, -380];
  let scale = [1, 1, 1];

  // Load a texture image
  // Initialize a Texture2DClass and read/create an image
  const texture2D = new Texture2DClass(gl);
  texture2D.loadTexture('brick.jpg').then(() => {
    // start drawing scene
    window.requestAnimationFrame(drawScene);
  })

  // define a function for drawing the scene
  function drawScene(now){
    if(start_rotation) {
      // Convert to seconds
      now *= 0.001;
      // Subtract the previous time from the current time
      const deltaTime = now - then;
      // Remember the current time for the next frame
      then = now;

      initializeContext(gl);

      // Compute angles of x/y rotation
      x_rotation += rotationSpeed * 1.2 * deltaTime;
      y_rotation += rotationSpeed * deltaTime;

      // Compute the x/y rotation matrices
      const x_rotation_m4 = TransformsClass.getXYZRotationMatrix('x', x_rotation);
      const y_rotation_m4 = TransformsClass.getXYZRotationMatrix('y', y_rotation);

      // Get the perspective matrix along with the other parameter matrices
      const perspective_m4 = TransformsClass.getPerspectiveMatrix(fov, aspect, zNear, zFar);
      const translate_m4 = TransformsClass.getTranslationMatrix(translation);
      const scale_m4 = TransformsClass.getScaleMatrix(scale);

      // Create transform_m4 by multiplying the matrices
      const transform_m4 = m4_create();
      m4_multiply(transform_m4, perspective_m4, translate_m4);
      m4_multiply(transform_m4, transform_m4, x_rotation_m4);
      m4_multiply(transform_m4, transform_m4, y_rotation_m4);
      m4_multiply(transform_m4, transform_m4, scale_m4);

      // Set the new transform by assigning the uniform 'u_matrix'
      matrixUniform.setData(transform_m4);

      // draw the scene
      gl.drawArrays(primitiveType, prim_offset, triangle_count);

      // Call drawScene again next frame
      requestAnimationFrame(drawScene);
    }
  }

  // update functions called by user interface updates to parameters
  function updateFieldOfView(value){
    fov = value;
    start_rotation = true;
    requestAnimationFrame(drawScene);
  }

  function updateTranslation(index, value){
    translation[index] = value;
    start_rotation = true;
    requestAnimationFrame(drawScene);
  }

  function updateScale(index, value){
    scale[index] = value;
    start_rotation = true;
    requestAnimationFrame(drawScene);
  }

  function updateStartStop(value){
    start_rotation = value;
    if(start_rotation){
      requestAnimationFrame(drawScene);
    }
  }

  // set up the user interface for changes to the parameters
  // define the z fudge factor value ui
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

  // Define start/stop checkbox
  const start_stop_checkbox = document.getElementById('startStopRotate');
  start_stop_checkbox.checked = true;
  start_stop_checkbox.addEventListener('change',() => {
    if(start_stop_checkbox.checked){
      updateStartStop(true);
    }else {
      updateStartStop(false);
    }
  })
}catch (e) {
  console.log(e);
}
