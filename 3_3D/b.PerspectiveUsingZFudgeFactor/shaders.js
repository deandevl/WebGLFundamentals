/**
 * Created by Rick on 2022-01-15.
 */
'use strict';

const vertex_shader = `#version 300 es

in vec4 a_position_v4;
in vec4 a_color_v4;

uniform mat4 u_matrix_m4;
uniform float u_zFudgeFactor_f;

out vec4 v_color_v4;

void main() {
  // Multiply the position by the matrix
  vec4 position_v4 = u_matrix_m4 * a_position_v4;

  // Adjust the z to divide by
  float zToDivideBy_f = 1.0 + position_v4.z * u_zFudgeFactor_f;

  // Divide x and y by z
  gl_Position = vec4(position_v4.xy / zToDivideBy_f, position_v4.zw);

  // Pass the color to the fragment shader
  v_color_v4 = a_color_v4;
}`

const fragment_shader = `#version 300 es

precision highp float;

// Passed in from the vertex shader
in vec4 v_color_v4;

// We need to declare an output for the fragment shader
out vec4 outColor_v4;

void main() {
  outColor_v4 = v_color_v4;
}`

export {
  vertex_shader,
  fragment_shader
}