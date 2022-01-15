/**
 * Created by Rick on 2022-01-14.
 */
'use strict';

const vertex_shader = `#version 300 es

// Receive position data from the buffer
in vec2 a_position_v2;

// Used to pass in the resolution of the canvas
uniform vec2 u_resolution_v2;

void main() {
  // convert the position from pixels to 0.0 to 1.0
  vec2 zeroToOne_v2 = a_position_v2 / u_resolution_v2;

  // convert from 0->1 to 0->2
  vec2 zeroToTwo_v2 = zeroToOne_v2 * 2.0;

  // convert from 0->2 to -1 -> +1 (clip space)
  vec2 clipSpace_v2 = zeroToTwo_v2 - 1.0;

  // flip and assign position
  gl_Position = vec4(clipSpace_v2 * vec2(1, -1), 0, 1);
}`

const fragment_shader = `#version 300 es

// Fragment shaders don't have a default precision so we need
//   to pick one. highp is a good default. It means "high precision"

precision highp float;

// Color to be set by the program
uniform vec4 u_color_v4;

// We need to declare an output for the fragment shader
out vec4 outColor_v4;

void main() {
  // outColor variable is responsible for setting (red, green, blue)
  outColor_v4 = u_color_v4;
}`

export {
  vertex_shader,
  fragment_shader
}