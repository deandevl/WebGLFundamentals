const t=[0,0,30,0,0,150,0,150,30,0,30,150,30,0,100,0,30,30,30,30,100,0,100,30,30,60,67,60,30,90,30,90,67,60,67,90];var e="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;var n=Math.PI/180;function r(t){return t*n}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});function a(t,e,n){const r=t.createShader(e);t.shaderSource(r,n),t.compileShader(r);if(t.getShaderParameter(r,t.COMPILE_STATUS))return r;{const e=t.getShaderInfoLog(r);throw t.deleteShader(r),new Error(`HelperFunctions-createShader-Error: ${e}`)}}class o{constructor(t,e,n,r){this.gl=t,this.buffer_type="ARRAY",this.data_type=e,this.attributeLocation=this.gl.getAttribLocation(n,r),this.arrayBuffer=this.gl.createBuffer()}bufferFormat(t,e,n,r){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),this.gl.vertexAttribPointer(this.attributeLocation,t,this.data_type,e,n,r),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(t,e){let n;if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),n=t,"number"==typeof t[0]){n=new Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}else if(Array.isArray(t)){n=new Array(t.length*t[0].length);for(let e=0;e<t.length;e++)for(let r=0;r<t[0].length;r++)n[e*t[0].length+r]=t[e][r]}switch(this.data_type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(n),e);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(n),e)}}delete(){this.gl.deleteBuffer(this.arrayBuffer)}}class i{constructor(t,e,n,r){this.gl=t,this.data_type=r,this.data=null,this.uniformLocation=t.getUniformLocation(e,n)}setData(...t){switch(this.data_type){case"uniform1i":this.gl.uniform1i(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform1f":this.gl.uniform1f(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform2f":this.gl.uniform2f(this.uniformLocation,t[0],t[1]),this.data=[t[0],t[1]];break;case"uniform4f":this.gl.uniform4f(this.uniformLocation,t[0],t[1],t[2],t[3]),this.data=[t[0],t[1],t[2],t[3]];break;case"uniform2fv":this.gl.uniform2fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform3fv":this.gl.uniform3fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform4fv":this.gl.uniform4fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniformMatrix3fv":this.gl.uniformMatrix3fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;case"uniformMatrix4fv":this.gl.uniformMatrix4fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;default:throw new Error(`UniformClass: function ${this.type} has not been implemented.`)}}}function s(){var t=new e(9);return e!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function u(t,e,n){var r=e[0],a=e[1],o=e[2],i=e[3],s=e[4],u=e[5],c=e[6],h=e[7],l=e[8],f=n[0],m=n[1],d=n[2],g=n[3],v=n[4],_=n[5],y=n[6],p=n[7],E=n[8];return t[0]=f*r+m*i+d*c,t[1]=f*a+m*s+d*h,t[2]=f*o+m*u+d*l,t[3]=g*r+v*i+_*c,t[4]=g*a+v*s+_*h,t[5]=g*o+v*u+_*l,t[6]=y*r+p*i+E*c,t[7]=y*a+p*s+E*h,t[8]=y*o+p*u+E*l,t}try{const n=function(t,e="webgl2",n){const r=document.getElementById(t);if(!r)throw new Error(`HelperFunctions-createGLContext-Error: Could not locate canvas element with id ${t}`);return{gl:r.getContext(e,n),canvas:r}}("my_canvas"),v=n.gl;!function(t){const e=t.clientWidth,n=t.clientHeight,r=t.width!==e||t.height!==n;r&&(t.width=e,t.height=n)}(n.canvas),v.viewport(0,0,v.canvas.width,v.canvas.height);const _=a(v,v.VERTEX_SHADER,"#version 300 es\n\nin vec2 a_position_v2;\n\nuniform mat3 u_transform_m3;\n\nvoid main() {\n  // Multiply the position by the matrix\n  gl_Position = vec4((u_transform_m3 * vec3(a_position_v2, 1)).xy, 0, 1);\n}  \n"),y=a(v,v.FRAGMENT_SHADER,"#version 300 es\n\nprecision highp float;\n\nuniform vec4 u_color_v4;\n\n// We need to declare an output for the fragment shader\nout vec4 outColor_v4;\n\nvoid main() {\n  outColor_v4 = u_color_v4;\n}"),p=function(t,e,n){const r=t.createProgram();if(t.attachShader(r,e),t.attachShader(r,n),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS))return r;{const e=t.getProgramInfoLog(r);throw t.deleteProgram(r),new Error(`HelperFunctions-createProgram-Error: ${e}`)}}(v,_,y);v.useProgram(p);const E=v.FLOAT,A=new o(v,E,p,"a_position_v2");A.setData(t,v.STATIC_DRAW);const x=v.createVertexArray();v.bindVertexArray(x);{const t=2,e=!1,n=0,r=0;A.bufferFormat(t,e,n,r)}new i(v,p,"u_color_v4","uniform4f").setData(Math.random(),Math.random(),Math.random(),1);const L=new i(v,p,"u_transform_m3","uniformMatrix3fv"),b=v.TRIANGLES,B=0,w=18;let F=[0,0],R=0,I=[1,1];function c(t){const e=s();var n,r;return r=t,(n=e)[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=1,n[5]=0,n[6]=r[0],n[7]=r[1],n[8]=1,e}function h(t){const e=s();var n,a,o,i;return n=e,a=r(t),o=Math.sin(a),i=Math.cos(a),n[0]=i,n[1]=o,n[2]=0,n[3]=-o,n[4]=i,n[5]=0,n[6]=0,n[7]=0,n[8]=1,e}function l(t){const e=s();var n,r;return r=t,(n=e)[0]=r[0],n[1]=0,n[2]=0,n[3]=0,n[4]=r[1],n[5]=0,n[6]=0,n[7]=0,n[8]=1,e}function f(t,n){return r=2/t,a=0,o=0,i=0,s=-2/n,u=0,c=-1,h=1,l=1,(f=new e(9))[0]=r,f[1]=a,f[2]=o,f[3]=i,f[4]=s,f[5]=u,f[6]=c,f[7]=h,f[8]=l,f;var r,a,o,i,s,u,c,h,l,f}function m(){!function(t,e=[.9,.9,.9,1]){t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL)}(v);const t=f(v.canvas.clientWidth,v.canvas.clientHeight),e=c(F),n=h(R),r=l(I),a=s();u(a,t,e),u(a,a,n),u(a,a,r),L.setData(a),v.drawArrays(b,B,w)}function d(t,e){F[t]=e,m()}function g(t,e){I[t]=e,m()}const C=document.getElementById("x_translate"),S=document.getElementById("y_translate"),M=document.getElementById("x_translate_output"),T=document.getElementById("y_translate_output");C.step=S.step=4,C.min=S.min=0,C.max=S.max=600,C.value=M.textContent=F[0],S.value=T.textContent=F[1],C.addEventListener("input",(()=>{const t=+C.value;M.textContent=t,d(0,t)})),S.addEventListener("input",(()=>{const t=+S.value;T.textContent=t,d(1,t)}));const P=document.getElementById("rotate"),D=document.getElementById("rotate_output");P.step=5,P.min=0,P.max=360,P.value=D.textContent=R,P.addEventListener("input",(()=>{const t=+P.value;D.textContent=t,R=t,m()}));const U=document.getElementById("x_scale"),k=document.getElementById("y_scale"),H=document.getElementById("x_scale_output"),Y=document.getElementById("y_scale_output");U.step=k.step=.1,U.min=k.min=-5,U.max=k.max=5,U.value=H.textContent=I[0],k.value=Y.textContent=I[1],U.addEventListener("input",(()=>{const t=+U.value;H.textContent=t,g(0,t)})),k.addEventListener("input",(()=>{const t=+k.value;Y.textContent=t,g(1,t)})),m()}catch(t){console.log(t)}
//# sourceMappingURL=index.45120c8e.js.map
