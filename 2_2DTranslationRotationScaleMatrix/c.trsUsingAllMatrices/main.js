/**
 * Created by Rick on 2021-12-11.
 */
'use strict';
import {F_2D_positions_list} from '../../positions-colors/F-2D.js';
import {vertex_shader, fragment_shader} from "./shaders.js";
import {ArrayBufferClass} from "web-gl-helpers";
import {UniformClass} from "web-gl-helpers";
import {resizeCanvasToDisplaySize} from "web-gl-helpers"
import {createShader} from "web-gl-helpers";
import {createGLcontext} from "web-gl-helpers";
import {createProgram} from "web-gl-helpers";
import {initializeContext} from "web-gl-helpers";

import {toRadian} from 'gl-matrix/esm/common';
import {
  create as m3_create,
  fromScaling as m3_fromScaling,
  fromTranslation as m3_fromTranslation,
  fromRotation as m3_fromRotation,
  fromValues as m3_fromValues,
  multiply as m3_multiply} from 'gl-matrix/esm/mat3';

try {
  const context = createGLcontext('my_canvas');
  const gl = context.gl;
  const canvas = context.canvas;

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

  // Set up attribute for 'a_position_v2'
  const type = gl.FLOAT; // the data is 32bit floats
  const positionAttrib = new ArrayBufferClass(gl, type, program,'a_position_v2');
  positionAttrib.setData(F_2D_positions_list, gl.STATIC_DRAW);

  // Associate shader attributes with corresponding data buffers
  const vao = gl.createVertexArray();
  // Make vao the one we're currently working with
  gl.bindVertexArray(vao);

  // Specify how to pull the data out
  {
    const size = 2; // 2 components per iteration
    const normalize = false; // don't normalize the data
    const stride = 0; // 0 = move forward size * sizeof(type) each
    //  iteration to get the next position
    const offset = 0; // start at the beginning of the buffer
    positionAttrib.bufferFormat(size, normalize, stride, offset);
  }

  // Set up uniforms
  const colorUniform = new UniformClass(gl, program, 'u_color_v4', 'uniform4f');
  colorUniform.setData(Math.random(), Math.random(), Math.random(), 1);

  const transformUniform = new UniformClass(gl, program, 'u_transform_m3', 'uniformMatrix3fv')

  const primitiveType = gl.TRIANGLES;
  const prim_offset = 0;
  const triangle_count = 18;

  // define the initial values for the parameters
  let translation = [0, 0];
  let rotation  = 0;
  let scale = [1,1];

  function getTranslationMatrix(translate){
    const translate_m3 = m3_create();
    m3_fromTranslation(translate_m3, translate);
    return translate_m3
  }

  function getRotationMatrix(rotate_deg){
    const rotate_m3 = m3_create();
    m3_fromRotation(rotate_m3, toRadian(rotate_deg));
    return rotate_m3;
  }

  function getScaleMatrix(scale){
    const scale_m3 = m3_create();
    m3_fromScaling(scale_m3, scale);
    return scale_m3;
  }
  //This 3x3 matrix flips the Y axis so that 0 is at the top;
  // Converts pixels to clip space scaling [-1,1]
  function getProjectionMatrix(width, height){
    // In row order
    return m3_fromValues(
      2.0/width, 0, 0,     //row 1
      0,  -2.0/height, 0,  //row 2
      -1, 1, 1             //row 3
    )
  }

  // define a function for drawing the scene
  function drawScene(){
    initializeContext(gl);

    // Get the projection matrix along with the other parameter matrices
    const projection_m3 = getProjectionMatrix(gl.canvas.clientWidth, gl.canvas.clientHeight);
    const translate_m3 = getTranslationMatrix(translation);
    const rotate_m3 = getRotationMatrix(rotation);
    const scale_m3 = getScaleMatrix(scale);

    // Create transform_m3 by multiplying the matrices
    const transform_m3 = m3_create();
    m3_multiply(transform_m3, projection_m3, translate_m3)
    m3_multiply(transform_m3, transform_m3, rotate_m3);
    m3_multiply(transform_m3, transform_m3, scale_m3);

    // Set the new transform and draw the scene
    transformUniform.setData(transform_m3);
    gl.drawArrays(primitiveType, prim_offset, triangle_count);
  }

  // update functions called by user interface updates to parameters
  function updateTranslation(index, value){
    translation[index] = value;
    drawScene();
  }

  function updateRotation(value){
    rotation = value;
    drawScene();
  }

  function updateScale(index, value){
    scale[index] = value;
    drawScene();
  }

  // set up the user interface for changes to the parameters
  // define x, y translation slider attributes and event callbacks
  const x_translate_slider = document.getElementById('x_translate');
  const y_translate_slider = document.getElementById('y_translate');
  const x_translate_output = document.getElementById('x_translate_output');
  const y_translate_output = document.getElementById('y_translate_output');
  x_translate_slider.step = y_translate_slider.step = 4;
  x_translate_slider.min = y_translate_slider.min = 0;
  x_translate_slider.max = y_translate_slider.max = 600;
  x_translate_slider.value = x_translate_output.textContent = translation[0];
  y_translate_slider.value = y_translate_output.textContent = translation[1];

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

  // define rotate slider and its event callback
  const rotate_slider = document.getElementById('rotate');
  const rotate_slider_output = document.getElementById('rotate_output');
  rotate_slider.step = 5.0;
  rotate_slider.min = 0.0;
  rotate_slider.max = 360.0;
  rotate_slider.value = rotate_slider_output.textContent = rotation;
  rotate_slider.addEventListener('input', () => {
    const rotate = +rotate_slider.value;
    rotate_slider_output.textContent = rotate;
    updateRotation(rotate);
  })

  // define x, y scale slider attributes and event callbacks
  const x_scale_slider = document.getElementById('x_scale');
  const y_scale_slider = document.getElementById('y_scale');
  const x_scale_output = document.getElementById('x_scale_output');
  const y_scale_output = document.getElementById('y_scale_output');
  x_scale_slider.step = y_scale_slider.step = 0.1;
  x_scale_slider.min = y_scale_slider.min = -5.0;
  x_scale_slider.max = y_scale_slider.max = 5.0;
  x_scale_slider.value = x_scale_output.textContent = scale[0];
  y_scale_slider.value = y_scale_output.textContent = scale[1];
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

  // draw the initial scene
  drawScene();
}catch (e) {
  console.log(e);
}
