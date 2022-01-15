/**
 * Created by Rick on 2022-01-15.
 */
'use strict';

const vertex_shader = `#version 300 es

in vec4 a_position_v4;
in vec2 a_texcoord_v2;

uniform mat4 u_matrix_m4;

out vec2 v_texcoord_v2;

void main() {
  // Multiply the position by the matrix
  gl_Position = u_matrix_m4 * a_position_v4;

  // Pass the texcoord to the fragment shader
  v_texcoord_v2 = a_texcoord_v2;
}`

const fragment_shader = `#version 300 es

precision highp float;

// Passed in from the vertex shader
in vec2 v_texcoord_v2;

// The texture
uniform sampler2D u_texture;

// Output for fragment shader
out vec4 outColor_v4;

void main() {
  outColor_v4 = texture(u_texture, v_texcoord_v2);
}`

export {
  vertex_shader,
  fragment_shader
}