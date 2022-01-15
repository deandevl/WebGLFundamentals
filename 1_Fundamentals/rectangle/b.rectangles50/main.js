/**
 * Created by Rick on 2021-12-11.
 */
'use strict';

import {vertex_shader, fragment_shader} from "./shaders.js";
import {AttributeClass} from "web-gl-helpers";
import {UniformClass} from "web-gl-helpers";
import {ReadShaderCodeClass} from "web-gl-helpers";
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

  // Set up attribute for 'a_position'
  const type = gl.FLOAT; // the data is 32bit floats
  const positionAttrib = new AttributeClass(gl, type, program, 'a_position_v2');

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
    positionAttrib.bufferFormat(size, type, normalize, stride, offset);
  }

  // Set up resolution uniform (u_resolution)
  const resolutionUniform = new UniformClass(gl, program, 'u_resolution_v2', 'uniform2f');
  resolutionUniform.setData(gl.canvas.width, gl.canvas.height);

  // Set up color uniform (u_color)
  const colorUniform = new UniformClass(gl, program, 'u_color_v4', 'uniform4f');

  initializeContext(gl);

  // Create attribute position data for 50 random rectangles in random colors
  for(let i = 0; i < 50; ++i){
    // Set position data (a_position)
    const rect_list = setRectangle(randomInt(300), randomInt(300), randomInt(300), randomInt(300));
    positionAttrib.setData(rect_list, gl.STATIC_DRAW);

    // Set the random uniform color (u_color)
    colorUniform.setData(Math.random(), Math.random(), Math.random(), 1);

    // Draw the rectangle
    const primitiveType = gl.TRIANGLES;
    const prim_offset = 0;
    const count = 6;
    gl.drawArrays(primitiveType, prim_offset, count);
  }
}catch (e) {
  console.log(e.message);
}


// Returns a random integer from 0 to range - 1
function randomInt(range){
  return Math.floor(Math.random() * range);
}
//Fill the internal buffer with the values that define a rectangle
function setRectangle(x, y, width, height){
  const x1 = x;
  const x2 = x + width;
  const y1 = y;
  const y2 = y + height;
  return [
    x1, y1,
    x2, y1,
    x1, y2,
    x1, y2,
    x2, y1,
    x2, y2
  ]
}