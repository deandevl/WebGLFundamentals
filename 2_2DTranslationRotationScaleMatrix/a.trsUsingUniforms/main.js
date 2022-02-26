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

    // Set up position attribute 'a_position_v2'
    // Create the attribute position data (a_position)
    const type = gl.FLOAT; // the data is 32bit floats
    const positionAttrib = new ArrayBufferClass(gl, type, program, 'a_position_v2');
    // Set the position data
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
    const resolutionUniform = new UniformClass(gl, program, 'u_resolution_v2', 'uniform2f');
    resolutionUniform.setData(gl.canvas.width, gl.canvas.height);

    const colorUniform = new UniformClass(gl, program, 'u_color_v4', 'uniform4f');
    colorUniform.setData(Math.random(), Math.random(), Math.random(), 1);

    const translationUniform = new UniformClass(gl, program, 'u_translation_v2', 'uniform2f');
    let translation = [0, 0];
    translationUniform.setData(translation[0], translation[1]);

    const rotationUniform = new UniformClass(gl, program, 'u_rotation_v2', 'uniform2f');
    let rotation = [0,1];
    rotationUniform.setData(rotation[0], rotation[1]);

    const scaleUniform = new UniformClass(gl, program, 'u_scale_v2', 'uniform2f');
    let scale = [1,1];
    scaleUniform.setData(scale[0], scale[1]);

    let angle = 0;

    // define a function for drawing the scene
    function drawScene(){
      initializeContext(gl);

      const primitiveType = gl.TRIANGLES;
      const prim_offset = 0;
      const triangle_count = 18;
      gl.drawArrays(primitiveType, prim_offset, triangle_count);
    }

    // set up the user interface for changes to the parameters
    // define x, y translation slider attributes and event callbacks
    const x_translate_slider = document.getElementById('x_translate');
    const y_translate_slider = document.getElementById('y_translate');
    const x_translate_output = document.getElementById('x_translate_output');
    const y_translate_output = document.getElementById('y_translate_output');
    x_translate_slider.step = y_translate_slider.step = 4;
    x_translate_slider.min = y_translate_slider.min = 0;
    x_translate_slider.max = y_translate_slider.max = 800;
    x_translate_slider.value = x_translate_output.textContent = translation[0];
    y_translate_slider.value = y_translate_output.textContent = translation[1];

    x_translate_slider.addEventListener('input', () => {
      translation[0] = x_translate_output.textContent = +x_translate_slider.value;
      translationUniform.setData(translation[0], translation[1]);
      drawScene();
    });
    y_translate_slider.addEventListener('input', () => {
      translation[1] = y_translate_output.textContent = +y_translate_slider.value;
      translationUniform.setData(translation[0], translation[1]);
      drawScene();
    })

    // define x, y rotation slider attributes and event callbacks
    const x_rotate_slider = document.getElementById('x_rotate');
    const y_rotate_slider = document.getElementById('y_rotate');
    const x_rotate_output = document.getElementById('x_rotate_output');
    const y_rotate_output = document.getElementById('y_rotate_output');
    x_rotate_slider.step = y_rotate_slider.step = 0.1;
    x_rotate_slider.min = y_rotate_slider.min = -1.0;
    x_rotate_slider.max = y_rotate_slider.max = 1.0;
    x_rotate_slider.value = x_rotate_output.textContent = rotation[0];
    y_rotate_slider.value = y_rotate_output.textContent = rotation[1];
    x_rotate_slider.addEventListener('input', () => {
      rotation[0] = x_rotate_output.textContent = (+x_rotate_slider.value).toFixed(2);
      rotation[1] = y_rotate_output.textContent = Math.sqrt(1 - Math.pow(rotation[0],2)).toFixed(2);
      rotationUniform.setData(rotation[0], rotation[1]);
      drawScene();
    });
    y_rotate_slider.addEventListener('input', () => {
      rotation[1] = y_rotate_output.textContent = (+y_rotate_slider.value).toFixed(2);
      rotation[0] = x_rotate_output.textContent = Math.sqrt(1 - Math.pow(rotation[1],2)).toFixed(2);
      rotationUniform.setData(rotation[0], rotation[1]);
      drawScene();
    });

    // define x, y scale slider attributes and event callbacks
    const x_scale_slider = document.getElementById('x_scale');
    const y_scale_slider = document.getElementById('y_scale');
    const x_scale_output = document.getElementById('x_scale_output');
    const y_scale_output = document.getElementById('y_scale_output');
    x_scale_slider.step = y_scale_slider.step = 0.2;
    x_scale_slider.min = y_scale_slider.min = 0.2;
    x_scale_slider.max = y_scale_slider.max = 4.0;
    x_scale_slider.value = x_scale_output.textContent = scale[0];
    y_scale_slider.value = y_scale_output.textContent = scale[1];
    x_scale_slider.addEventListener('input', () => {
      scale[0] = x_scale_output.textContent = +x_scale_slider.value;
      scaleUniform.setData(scale[0], scale[1]);
      drawScene();
    });
    y_scale_slider.addEventListener('input', () => {
      scale[1] = y_scale_output.textContent = +y_scale_slider.value;
      scaleUniform.setData(scale[0], scale[1]);
      drawScene();
    });

    // define angle slider and its event callback
    const angle_slider = document.getElementById('angle');
    const angle_slider_output = document.getElementById('angle_output');
    angle_slider.step = 5.0;
    angle_slider.min = 0.0;
    angle_slider.max = 360.0;
    angle_slider.value = angle_slider_output.textContent = angle;
    angle_slider.addEventListener('input', () => {
      angle = angle_slider_output.textContent = +angle_slider.value;
      const angle_radians = toRadian(angle);
      rotationUniform.setData(Math.sin(angle_radians), Math.cos(angle_radians));
      drawScene();
    })

    // draw the initial scene
    drawScene();
  }catch (e) {
    console.log(e.message);
  }


