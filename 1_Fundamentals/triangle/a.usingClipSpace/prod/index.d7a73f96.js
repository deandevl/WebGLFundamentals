"undefined"!=typeof Float32Array&&Float32Array,Math.random;Math.PI;Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});function e(e,t,r){const n=e.createShader(t);e.shaderSource(n,r),e.compileShader(n);if(e.getShaderParameter(n,e.COMPILE_STATUS))return n;{const t=e.getShaderInfoLog(n);throw e.deleteShader(n),new Error(`HelperFunctions-createShader-Error: ${t}`)}}class t{constructor(e,t,r,n){this.gl=e,this.buffer_type="ARRAY",this.data_type=t,this.attributeLocation=this.gl.getAttribLocation(r,n),this.arrayBuffer=this.gl.createBuffer()}bufferFormat(e,t,r,n){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),this.gl.vertexAttribPointer(this.attributeLocation,e,this.data_type,t,r,n),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(e,t){let r;if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),r=e,"number"==typeof e[0]){r=new Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]}else if(Array.isArray(e)){r=new Array(e.length*e[0].length);for(let t=0;t<e.length;t++)for(let n=0;n<e[0].length;n++)r[t*e[0].length+n]=e[t][n]}switch(this.data_type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),t);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(r),t)}}delete(){this.gl.deleteBuffer(this.arrayBuffer)}}try{const n=function(e,t="webgl2",r){const n=document.getElementById(e);if(!n)throw new Error(`HelperFunctions-createGLContext-Error: Could not locate canvas element with id ${e}`);return{gl:n.getContext(t,r),canvas:n}}("my_canvas"),a=n.gl;!function(e){const t=e.clientWidth,r=e.clientHeight,n=e.width!==t||e.height!==r;n&&(e.width=t,e.height=r)}(n.canvas),a.viewport(0,0,a.canvas.width,a.canvas.height);const o=e(a,a.VERTEX_SHADER,"#version 300 es\n\n// Vertex Shader\n// An attribute is an input (in) to a vertex shader.\nin vec4 a_position_v4;\n\n// All shaders have a main function\nvoid main() {\n  // gl_position is a special variable a vertex shader is responsible for setting.\n  gl_Position = a_position_v4;\n}"),i=e(a,a.FRAGMENT_SHADER,'#version 300 es\n\n// Fragment shaders don\'t have a default precision so we need\n//   to pick one. highp is a good default. It means "high precision"\n\nprecision highp float;\n\n// We need to declare an output for the fragment shader\nout vec4 outColor_v4;\n\nvoid main() {\n  // outColor variable is responsible for setting (red, green, blue)\n  outColor_v4 = vec4(1, 0, 0.5, 1); // return reddish-purple\n}'),s=function(e,t,r){const n=e.createProgram();if(e.attachShader(n,t),e.attachShader(n,r),e.linkProgram(n),e.getProgramParameter(n,e.LINK_STATUS))return n;{const t=e.getProgramInfoLog(n);throw e.deleteProgram(n),new Error(`HelperFunctions-createProgram-Error: ${t}`)}}(a,o,i);a.useProgram(s);const h=[-1,0,0,1,-1,1],l=[-1,-1,1,1,-1,1],c=[-.5,-.5,.5,.5,-.5,.5];let g=h;const d=a.FLOAT,f=new t(a,d,s,"a_position_v4"),u=a.createVertexArray();a.bindVertexArray(u);{const e=2,t=!1,r=0,n=0;f.bufferFormat(e,t,r,n)}function r(){!function(e,t=[.9,.9,.9,1]){e.clearColor(t[0],t[1],t[2],t[3]),e.clearDepth(1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL)}(a),f.setData(g,a.STATIC_DRAW);const e=a.TRIANGLES;a.drawArrays(e,0,3)}document.getElementById("corner").addEventListener("click",(()=>{g=h,r()}));document.getElementById("bigger").addEventListener("click",(()=>{g=l,r()}));document.getElementById("center").addEventListener("click",(()=>{g=c,r()})),r()}catch(e){console.log(e)}
//# sourceMappingURL=index.d7a73f96.js.map