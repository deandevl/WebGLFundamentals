/**
 * Created by Rick on 2022-01-01.
 */
'use strict';

import {cube_positions_list, cube_texcoords_list} from '../../positions-colors/cube.js';
import {vertex_shader, fragment_shader} from "./shaders.js";
import {AttributeClass} from "web-gl-helpers";
import {UniformClass} from "web-gl-helpers";
import {Texture2DClass} from "web-gl-helpers";
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
  const positionAttrib = new AttributeClass(gl, position_type, program,'a_position_v4');
  positionAttrib.setData(cube_positions_list, gl.STATIC_DRAW);

  // Set up varying texture coordinates attribute for 'a_texcoord_v2'
  const texture_type = gl.FLOAT; // the data is 32bit floats
  const textureAttrib = new AttributeClass(gl, texture_type, program,'a_texcoord_v2');
  textureAttrib.setData(cube_texcoords_list, gl.STATIC_DRAW);

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

  // Specify how to pull the texture coordinate data out
  {
    const size = 2 // 2 components per iteration
    const normalize = true; // normalize the data
    const stride = 0; // 0 = move forward size * sizeof(type) each
    //  iteration to get the next position
    const offset = 0; // start at the beginning of the buffer
    textureAttrib.bufferFormat(size, normalize, stride, offset);
  }

  // Set up the uniforms
  // Set up matrix uniform 'u_matrix'
  const matrixUniform = new UniformClass(gl, program, 'u_matrix_m4', 'uniformMatrix4fv')

  const primitiveType = gl.TRIANGLES;
  const prim_offset = 0;
  const triangle_count = 6 * 6;

  // Animation related parameters
  let x_rotation = 0;
  let y_rotation = 0;
  const rotationSpeed = 10.2;
  let then = 0;

  // Define the values for the perspective matrix
  const fov = 60;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 1;
  const zFar = 2000;
  // Compute the perspective matrix
  const perspective_m4 = TransformsClass.getPerspectiveMatrix(fov, aspect, zNear, zFar);

  // Define the values for the camera
  const cameraPosition = [0, 0, 2];
  const up = [0, 1, 0];
  const cameraTarget = [0, 0, 0];
  // Compute the matrix that makes/transforms the camera to look at the target
  const cameraToTarget_m4 = m4_create();
  m4_targetTo(cameraToTarget_m4, cameraPosition, cameraTarget, up);

  // Make a view matrix from the cameraToTarget_m4 matrix
  // Inverting cameraToTarget_m4 provides a transform for
  //   everything else in the scene
  const viewMatrix_m4 = m4_create();
  m4_invert(viewMatrix_m4, cameraToTarget_m4);

  // Compute the viewPerspective matrix
  const viewPerspective_m4 = m4_create();
  m4_multiply(viewPerspective_m4, perspective_m4, viewMatrix_m4);

  // Initialize a Texture2DClass and read/create an image
  const texture2D = new Texture2DClass(gl)
  // Read in the image texture
  texture2D.loadTexture('noodles.jpg').then(()=> {
    // start drawing scene
    window.requestAnimationFrame(drawScene);
  })

  // define a function for drawing the scene
  function drawScene(now){
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

    // Compute the transform matrix
    const transform_m4 = m4_create();
    m4_multiply(transform_m4, viewPerspective_m4, x_rotation_m4);
    m4_multiply(transform_m4, transform_m4, y_rotation_m4);

    // Set the new transform by assigning the uniform 'u_matrix_m4'
    matrixUniform.setData(transform_m4);

    // draw the scene
    gl.drawArrays(primitiveType, prim_offset, triangle_count);

    // Call drawScene again next frame
    requestAnimationFrame(drawScene);
  }
}catch (e) {
  console.log(e);
}
