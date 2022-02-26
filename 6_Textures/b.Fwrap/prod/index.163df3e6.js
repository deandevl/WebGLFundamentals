var t="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;Math.PI;function e(){var e=new t(16);return t!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function r(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function i(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function a(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var n=function(t,e,r,i,a,n,o){var s=1/(e-r),h=1/(i-a),c=1/(n-o);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+r)*s,t[13]=(a+i)*h,t[14]=(o+n)*c,t[15]=1,t};function o(t,e,r){const i=t.createShader(e);t.shaderSource(i,r),t.compileShader(i);if(t.getShaderParameter(i,t.COMPILE_STATUS))return i;{const e=t.getShaderInfoLog(i);throw t.deleteShader(i),new Error(`HelperFunctions-createShader-Error: ${e}`)}}class s{constructor(t,e,r,i){this.gl=t,this.buffer_type="ARRAY",this.data_type=e,this.attributeLocation=this.gl.getAttribLocation(r,i),this.arrayBuffer=this.gl.createBuffer()}bufferFormat(t,e,r,i){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),this.gl.vertexAttribPointer(this.attributeLocation,t,this.data_type,e,r,i),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(t,e){let r;if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),r=t,"number"==typeof t[0]){r=new Array(t.length);for(let e=0;e<t.length;e++)r[e]=t[e]}else if(Array.isArray(t)){r=new Array(t.length*t[0].length);for(let e=0;e<t.length;e++)for(let i=0;i<t[0].length;i++)r[e*t[0].length+i]=t[e][i]}switch(this.data_type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),e);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(r),e)}}delete(){this.gl.deleteBuffer(this.arrayBuffer)}}class h{constructor(t){this.gl=t}setColor(t){const e=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array(t))}async loadTexture(t){this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array([0,0,255,255]));let e=await fetch(t),r=await e.blob(),i=await createImageBitmap(r,{imageOrientation:"flipY"});const a=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,a),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,i)}}class c{constructor(t,e,r,i){this.gl=t,this.data_type=i,this.data=null,this.uniformLocation=t.getUniformLocation(e,r)}setData(...t){switch(this.data_type){case"uniform1i":this.gl.uniform1i(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform1f":this.gl.uniform1f(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform2f":this.gl.uniform2f(this.uniformLocation,t[0],t[1]),this.data=[t[0],t[1]];break;case"uniform4f":this.gl.uniform4f(this.uniformLocation,t[0],t[1],t[2],t[3]),this.data=[t[0],t[1],t[2],t[3]];break;case"uniform2fv":this.gl.uniform2fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform3fv":this.gl.uniform3fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform4fv":this.gl.uniform4fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniformMatrix3fv":this.gl.uniformMatrix3fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;case"uniformMatrix4fv":this.gl.uniformMatrix4fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;default:throw new Error(`UniformClass: function ${this.type} has not been implemented.`)}}}function l(e,r,i){var a=new t(3);return a[0]=e,a[1]=r,a[2]=i,a}var f,u;f=new t(3),t!=Float32Array&&(f[0]=0,f[1]=0,f[2]=0),u=f;try{const t=function(t,e="webgl2",r){const i=document.getElementById(t);if(!i)throw new Error(`HelperFunctions-createGLContext-Error: Could not locate canvas element with id ${t}`);return{gl:i.getContext(e,r),canvas:i}}("my_canvas"),f=t.gl,u=t.canvas;f.enable(f.DEPTH_TEST);const T=80*2.5,d=f.canvas.clientWidth/2-T/2,A=f.canvas.clientHeight-T-60,v=1,R=[d,A,0],x=[.5,.5,0],y=[T,T,1];f.REPEAT,f.REPEAT;!function(t){const e=t.clientWidth,r=t.clientHeight,i=t.width!==e||t.height!==r;i&&(t.width=e,t.height=r)}(u),f.viewport(0,0,f.canvas.width,f.canvas.height);const b=o(f,f.VERTEX_SHADER,"#version 300 es\n\nin vec4 a_position_v4;\nin vec2 a_texcoord_v2;\n\nuniform mat4 u_matrix_m4;\n\nout vec2 v_texcoord_v2;\n\nvoid main() {\n  // Multiply the position by the matrix\n  gl_Position = u_matrix_m4 * a_position_v4;\n\n  // Pass the texcoord to the fragment shader\n  v_texcoord_v2 = a_texcoord_v2;\n}"),w=o(f,f.FRAGMENT_SHADER,"#version 300 es\n\nprecision highp float;\n\n// Passed in from the vertex shader\nin vec2 v_texcoord_v2;\n\n// The texture\nuniform sampler2D u_texture;\n\n// Output for fragment shader\nout vec4 outColor_v4;\n\nvoid main() {\n  outColor_v4 = texture(u_texture, v_texcoord_v2);\n}"),D=function(t,e,r){const i=t.createProgram();if(t.attachShader(i,e),t.attachShader(i,r),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS))return i;{const e=t.getProgramInfoLog(i);throw t.deleteProgram(i),new Error(`HelperFunctions-createProgram-Error: ${e}`)}}(f,b,w);f.useProgram(D);const U=f.FLOAT,p=new s(f,U,D,"a_position_v4"),F=[-.5,.5,.5,.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,.5,-.5,.5];p.setData(F,f.STATIC_DRAW);const L=f.FLOAT,B=new s(f,L,D,"a_texcoord_v2"),P=[-3,-1,2,-1,-3,4,-3,4,2,-1,2,4];B.setData(P,f.STATIC_DRAW);const S=f.createVertexArray();f.bindVertexArray(S);{const t=3,e=!1,r=0,i=0;p.bufferFormat(t,e,r,i)}{const t=2,e=!0,r=0,i=0;B.bufferFormat(t,e,r,i)}new h(f,f.TEXTURE0+0).loadTexture("./f-texture.png");const I=new c(f,D,"u_matrix_m4","uniformMatrix4fv");function g(t){const r=l(t[0],t[1],t[2]),a=e();return i(a,r),a}function m(t){const r=l(t[0],t[1],t[2]),i=e();return a(i,r),i}function E(t,r,i,a,o,s){const h=e();return n(h,t,r,i,a,o,s),h}E(0,f.canvas.clientWidth,f.canvas.clientHeight,0,v,-v),g(R),g(x),m(y);const M=e();function _(){!function(t,e=[.9,.9,.9,1]){t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL)}(f);const t=f.TRIANGLES;f.drawArrays(t,0,6)}r(M),I.setData(M),_()}catch(t){console.log(t)}
//# sourceMappingURL=index.163df3e6.js.map
