/**
 * Created by Rick on 2021-12-31.
 */
'use strict';

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

import {fromValues as v3_fromValues} from 'gl-matrix/esm/vec3';

import {
  create as m4_create,
  identity as m4_identity,
  fromXRotation,
  fromYRotation,
  fromZRotation,
  fromScaling as m4_fromScaling,
  fromTranslation as m4_fromTranslation,
  fromValues as fromValues_m4,
  multiply,
  perspective,
  ortho
} from 'gl-matrix/esm/mat4';

try {
  const context = createGLcontext('my_canvas');
  const gl = context.gl;
  const canvas = context.canvas;

  gl.enable(gl.DEPTH_TEST); // enable depth testing

  // define translation, scaling for plane
  const scaleFactor = 2.5;
  const size = 80 * scaleFactor;
  const x = gl.canvas.clientWidth / 2 - size / 2;
  const y = gl.canvas.clientHeight - size - 60;
  const depth = 1;
  const translation_1 = [x, y, 0];
  const translation_2 = [0.5, 0.5, 0];
  //const scale = [1, 1, 1];
  const scale = [size, size, 1];

  // define initial wrapping of texture coordinates
  let wrapS = gl.REPEAT;
  let wrapT = gl.REPEAT;

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
  const positions = [
    -0.5,  0.5,  0.5,
    0.5,  0.5,  0.5,
    -0.5, -0.5,  0.5,
    -0.5, -0.5,  0.5,
    0.5,  0.5,  0.5,
    0.5, -0.5,  0.5,
  ]
  positionAttrib.setData(positions, gl.STATIC_DRAW);

  // Set up varying texture coordinates attribute for 'a_texcoord_v2'
  const texture_type = gl.FLOAT; // the data is 32bit floats
  const textureAttrib = new AttributeClass(gl, texture_type, program,'a_texcoord_v2');
  const texcoords = [
   -3, -1,
    2, -1,
   -3,  4,
   -3,  4,
    2, -1,
    2,  4,
 ]
  /*const texcoords = [
    0, 0,
    1, 0,
    1, 1,
    0, 0,
    1, 1,
    0, 1,
  ]*/
  textureAttrib.setData(texcoords, gl.STATIC_DRAW);

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

  // Initialize a Texture2DClass and read/create an image
  const texture2D = new Texture2DClass(gl, gl.TEXTURE0 + 0)

  // Fill texture with blue color
  //texture2D.setColor([0, 125, 155, 125]);
  texture2D.setImage('./f-texture.png', gl.TEXTURE0 + 0);

  // Set up the uniforms
  // Set up matrix uniform 'u_matrix_m4'
  const matrixUniform = new UniformClass(gl, program, 'u_matrix_m4', 'uniformMatrix4fv')

  function getTranslationMatrix(translate_ar){
    const translate_v3 = v3_fromValues(translate_ar[0], translate_ar[1], translate_ar[2]);
    const translate_m4 = m4_create();
    m4_fromTranslation(translate_m4, translate_v3);
    return translate_m4
  }

  function getScaleMatrix(scale_ar){
    const scale_v3 = v3_fromValues(scale_ar[0], scale_ar[1], scale_ar[2]);
    const scale_m4 = m4_create();
    m4_fromScaling(scale_m4, scale_v3);
    return scale_m4;
  }

  function getOrthoMatrix(left, right, bottom, top, near, far){
    const ortho_m4 = m4_create();
    ortho(ortho_m4, left, right, bottom, top, near, far);
    return ortho_m4;
  }

  // Get the projection matrix along with the other parameter matrices
  const projection_m4 = getOrthoMatrix(
    0,
    gl.canvas.clientWidth,
    gl.canvas.clientHeight,
    0,
    depth,
    -depth
  );
  const translate_1_m4 = getTranslationMatrix(translation_1);
  const translate_2_m4 = getTranslationMatrix(translation_2);
  const scale_m4 = getScaleMatrix(scale);

  // Create transform_m4 by multiplying the matrices
  const transform_m4 = m4_create();
  m4_identity(transform_m4);
 /* multiply(transform_m4, projection_m4, translate_1_m4);
  multiply(transform_m4, transform_m4, scale_m4);
  multiply(transform_m4, transform_m4, translate_2_m4);*/

  // Set the new transform by assigning the uniform 'u_matrix'
  matrixUniform.setData(transform_m4);

  function drawScene(){
    initializeContext(gl);

   /* gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
*/
    // draw the scene
    const primitiveType = gl.TRIANGLES;
    const prim_offset = 0;
    const triangle_count = 6;
    gl.drawArrays(primitiveType, prim_offset, triangle_count);
  }

  drawScene();
}catch (e) {
  console.log(e);
}
