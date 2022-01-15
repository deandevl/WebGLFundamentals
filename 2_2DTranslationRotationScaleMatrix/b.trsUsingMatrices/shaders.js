/**
 * Created by Rick on 2022-01-14.
 */
'use strict';

const vertex_shader = `#version 300 es

in vec2 a_position_v2;

uniform vec2 u_resolution_v2;
uniform mat3 u_transform_m3;

void main() {
  // Multiply the position by the matrix
  vec2 position_v2 = (u_transform_m3 * vec3(a_position_v2, 1)).xy;

  // convert the position from pixels to 0.0 to 1.0
  vec2 zeroToOne_v2 = position_v2 / u_resolution_v2;

  // convert from 0->1 to 0->2
  vec2 zeroToTwo_v2 = zeroToOne_v2 * 2.0;

  // convert from 0->2 to -1 -> +1 (clip space)
  vec2 clipSpace_v2 = zeroToTwo_v2 - 1.0;

  // flip and assign position
  gl_Position = vec4(clipSpace_v2 * vec2(1, -1), 0, 1);
}`

const fragment_shader = `#version 300 es

precision highp float;

// We need to declare an output for the fragment shader
out vec4 outColor_v4;

uniform vec4 u_color_v4;

void main() {
  outColor_v4 = u_color_v4;
}
`

export {
  vertex_shader,
  fragment_shader
}