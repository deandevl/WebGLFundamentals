/**
 * Created by Rick on 2022-01-14.
 */
'use strict';

const vertex_shader = `#version 300 es

in vec2 a_position_v2;

uniform mat3 u_transform_m3;

void main() {
  // Multiply the position by the transform matrix
  gl_Position = vec4((u_transform_m3 * vec3(a_position_v2, 1)).xy, 0, 1);
}`

const fragment_shader = `#version 300 es

// Fragment shaders don't have a default precision so we need
//   to pick one. highp is a good default. It means "high precision"

precision highp float;

// We need to declare an output for the fragment shader
out vec4 outColor_v4;

void main() {
  // outColor variable is responsible for setting (red, green, blue)
  outColor_v4 = vec4(1, 0, 0.5, 1); // return reddish-purple
}`

export {
  vertex_shader,
  fragment_shader
}