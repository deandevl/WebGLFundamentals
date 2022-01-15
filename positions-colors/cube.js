/**
 * Created by Rick on 2022-01-01.
 */
'use strict';
const cube_positions_list =  [
  -0.5, -0.5,  -0.5,
  -0.5,  0.5,  -0.5,
  0.5, -0.5,  -0.5,
  -0.5,  0.5,  -0.5,
  0.5,  0.5,  -0.5,
  0.5, -0.5,  -0.5,

  -0.5, -0.5,   0.5,
  0.5, -0.5,   0.5,
  -0.5,  0.5,   0.5,
  -0.5,  0.5,   0.5,
  0.5, -0.5,   0.5,
  0.5,  0.5,   0.5,

  -0.5,   0.5, -0.5,
  -0.5,   0.5,  0.5,
  0.5,   0.5, -0.5,
  -0.5,   0.5,  0.5,
  0.5,   0.5,  0.5,
  0.5,   0.5, -0.5,

  -0.5,  -0.5, -0.5,
  0.5,  -0.5, -0.5,
  -0.5,  -0.5,  0.5,
  -0.5,  -0.5,  0.5,
  0.5,  -0.5, -0.5,
  0.5,  -0.5,  0.5,

  -0.5,  -0.5, -0.5,
  -0.5,  -0.5,  0.5,
  -0.5,   0.5, -0.5,
  -0.5,  -0.5,  0.5,
  -0.5,   0.5,  0.5,
  -0.5,   0.5, -0.5,

  0.5,  -0.5, -0.5,
  0.5,   0.5, -0.5,
  0.5,  -0.5,  0.5,
  0.5,  -0.5,  0.5,
  0.5,   0.5, -0.5,
  0.5,   0.5,  0.5,
]

const cube_texcoords_list = [
  // select the top left image
  0   , 0  ,
  0   , 0.5,
  0.25, 0  ,
  0   , 0.5,
  0.25, 0.5,
  0.25, 0  ,
  // select the top middle image
  0.25, 0  ,
  0.5 , 0  ,
  0.25, 0.5,
  0.25, 0.5,
  0.5 , 0  ,
  0.5 , 0.5,
  // select to top right image
  0.5 , 0  ,
  0.5 , 0.5,
  0.75, 0  ,
  0.5 , 0.5,
  0.75, 0.5,
  0.75, 0  ,
  // select the bottom left image
  0   , 0.5,
  0.25, 0.5,
  0   , 1  ,
  0   , 1  ,
  0.25, 0.5,
  0.25, 1  ,
  // select the bottom middle image
  0.25, 0.5,
  0.25, 1  ,
  0.5 , 0.5,
  0.25, 1  ,
  0.5 , 1  ,
  0.5 , 0.5,
  // select the bottom right image
  0.5 , 0.5,
  0.75, 0.5,
  0.5 , 1  ,
  0.5 , 1  ,
  0.75, 0.5,
  0.75, 1  ,
]

export {
  cube_positions_list,
  cube_texcoords_list
}