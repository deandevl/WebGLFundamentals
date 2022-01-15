/**
 * Created by Rick on 2022-01-15.
 */
'use strict';

const vertex_shader = `#version 300 es

in vec4 a_position_v4;
in vec3 a_normal_v3;

uniform mat4 u_trsViewPerspective_m4; // translate/rotate/scale matrix * view_m4 * perspective_m4
uniform mat4 u_trsInverseTranspose_m4; // transpose(inverse(translate/rotate/scale matrix))

out vec3 v_normal_v3;

void main() {
  // Multiply the position by the matrix
  gl_Position = u_trsViewPerspective_m4 * a_position_v4;

  // Orient the normals and pass to the fragment shader
  v_normal_v3 = mat3(u_trsInverseTranspose_m4) * a_normal_v3;
}`

const fragment_shader = `#version 300 es

precision highp float;

// Passed in from the vertex shader
in vec3 v_normal_v3;
out vec4 outColor_v4;

uniform vec3 u_reverseLightDirection_v3;
uniform vec4 u_color_v4;

void main() {
  // Because v_normal is a varying it's interpolated,
  //   so it will not be a unit vector.  Normalizing
  //   it will make it a unit vector again.
  vec3 normal_v3 = normalize(v_normal_v3);

  float light_f = dot(normal_v3, u_reverseLightDirection_v3);

  outColor_v4 = u_color_v4;

  // Lets multiply just the color portion (not the alpha)
  //   by the light.
  outColor_v4.rgb *= light_f;
}`

export {
  vertex_shader,
  fragment_shader
}