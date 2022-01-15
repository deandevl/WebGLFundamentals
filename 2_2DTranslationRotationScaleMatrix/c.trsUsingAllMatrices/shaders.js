/**
 * Created by Rick on 2022-01-14.
 */
'use strict';

const vertex_shader = `#version 300 es

in vec2 a_position_v2;

uniform mat3 u_transform_m3;

void main() {
  // Multiply the position by the matrix
  gl_Position = vec4((u_transform_m3 * vec3(a_position_v2, 1)).xy, 0, 1);
}  
`

const fragment_shader = `#version 300 es

precision highp float;

uniform vec4 u_color_v4;

// We need to declare an output for the fragment shader
out vec4 outColor_v4;

void main() {
  outColor_v4 = u_color_v4;
}`

export {
  vertex_shader,
  fragment_shader
}