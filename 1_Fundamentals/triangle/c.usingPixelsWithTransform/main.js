/**
 * Created by Rick on 2022-01-02.
 */
'use strict';

import {vertex_shader, fragment_shader} from "./shaders.js";
import {ArrayBufferClass} from "web-gl-helpers";
import {UniformClass} from "web-gl-helpers";
import {resizeCanvasToDisplaySize} from "web-gl-helpers"
import {createShader} from "web-gl-helpers";
import {createGLcontext} from "web-gl-helpers";
import {createProgram} from "web-gl-helpers";
import {initializeContext} from "web-gl-helpers";

import {
  create as m3_create,
  fromValues as m3_fromValues,
  projection as m3_projection
} from 'gl-matrix/esm/mat3';

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

    // Set up position attribute for a triangle
    const positions_corner = [
      0, 300,
      300, 0,
      0, 0
    ]
    const positions_bigger = [
      0, 600,
      600, 0,
      0, 0
    ]
    const positions_center = [
      150, 450,
      450, 150,
      150, 150
    ]

    let positions = positions_corner;
    const type = gl.FLOAT; // the data is 32bit floats
    const positionAttrib = new ArrayBufferClass(gl, type, program, 'a_position_v2');
    // Set the attribute position data
    positionAttrib.setData(positions, gl.STATIC_DRAW);

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

    const transformUniform = new UniformClass(gl, program, 'u_transform_m3', 'uniformMatrix3fv')

    function pixelToClip(width, height){
      return m3_fromValues(
        2 / width, 0, 0,
        0, -2 / height, 0,
        -1, 1, 1
      )
    }

    function get_projection(width, height){
      const projection_m3 = m3_create();
      m3_projection(projection_m3, width, height);
      return projection_m3;
    }
    const pixelToClip_m3 = pixelToClip(gl.canvas.width, gl.canvas.height);
    const projection_m3 = get_projection(gl.canvas.width, gl.canvas.height);

    //transformUniform.setData(pixelToClip_m3);
    transformUniform.setData(projection_m3);

    function drawScene() {
      initializeContext(gl);

      // Set the attribute position data
      positionAttrib.setData(positions, gl.STATIC_DRAW);

      // Ask WebGL to execute the GLSL program
      const primitiveType = gl.TRIANGLES;
      const prim_offset = 0;
      const triangle_count = 3;
      gl.drawArrays(primitiveType, prim_offset, triangle_count);
    }

    // Set up user interface
    const corner_radio = document.getElementById('corner');
    corner_radio.addEventListener('click', () => {
      positions = positions_corner;
      drawScene();
    })

    const bigger_radio = document.getElementById('bigger');
    bigger_radio.addEventListener('click', () => {
      positions = positions_bigger;
      drawScene();
    })

    const center_radio = document.getElementById('center');
    center_radio.addEventListener('click', () => {
      positions = positions_center;
      drawScene();
    })
    // Draw the scene
    drawScene();
  }catch (e){
    console.log(e.message);
  }