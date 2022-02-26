/**
 * Created by Rick on 2021-12-10.
 */
'use strict';

import {vertex_shader, fragment_shader} from "./shaders.js";
import {ArrayBufferClass} from "web-gl-helpers";
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
  // Tell it to use our program (a pair of shaders)
  gl.useProgram(program);

  // Set up triangle position attribute buffer and set data
  const positions_corner = [
    -1,0,
    0,1,
    -1,1
  ]

  const positions_bigger = [
    -1,-1,
    1,1,
    -1,1
  ]

  const positions_center = [
    -0.5,-0.5,
    0.5,0.5,
    -0.5,0.5
  ]

  let positions = positions_corner;
  const type = gl.FLOAT; // the data is 32bit floats
  const positionAttrib = new ArrayBufferClass(gl, type, program, 'a_position_v4');

  // Associate shader attributes with corresponding data buffers
  // Create a connection manager for the data, a Vertex Array Object
  // These are typically made global so you can swap what you draw in
  //   the render function.
  const vao = gl.createVertexArray();
  // Make vao the one we're currently working with
  gl.bindVertexArray(vao);

  // Turn on the attribute
  // Specify how to pull the data out and bind the data
  //  to the internal WebGL internal array buffer ARRAY_BUFFER
  // Note that in our vertex shader we specified an attribute a_position as vec4
  {
    const size = 2; // 2 components per iteration
    const normalize = false; // don't normalize the data
    const stride = 0; // 0 = move forward size * sizeof(type) each
    //  iteration to get the next position
    const offset = 0; // start at the beginning of the buffer
    positionAttrib.bufferFormat(size, normalize, stride, offset);
  }

  // Because the count is 3 this will execute our vertex shader 3 times -- once
  //    for each of the a_position points.
  // Because we set primitiveType to gl.TRIANGLES, each time our vertex shader is
  //    run 3 times WeBGL will draw a triangle based on the 3 values we set gl_Position to.
  //    Note that those values are the clip space coordinates that go from -1 to 1.

  // The translation from clip space to screen space (from our viewport specification of
  //   canvas width(400) and height(300):
  //         clip space         screen space
  //            0,0      ->        200, 150
  //            0,0.5    ->        200, 225
  //            0.7,0    ->        340, 150
  // Clip space conversion for width: (clip) * (400/2) + 200
  // Clip space conversion for height: (clip) * (300/2) + 150
  // Note that the drawing starts at the center of the screen (200, 150)

  function drawScene() {
    initializeContext(gl);

    // Set the attribute position data
    positionAttrib.setData(positions, gl.STATIC_DRAW);

    // Ask WebGL to execute the GLSL program
    const primitiveType = gl.TRIANGLES;
    const prim_offset = 0;
    const count = 3;
    gl.drawArrays(primitiveType, prim_offset, count);
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

}catch (e) {
  console.log(e);
}