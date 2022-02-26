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

  // Set up uniform
  const resolutionUniform = new UniformClass(gl, program, 'u_resolution_v2', 'uniform2f');
  // Set the uniform resolution data
  resolutionUniform.setData(gl.canvas.width, gl.canvas.height);

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
