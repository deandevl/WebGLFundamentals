const t=[0,0,30,0,0,150,0,150,30,0,30,150,30,0,100,0,30,30,30,30,100,0,100,30,30,60,67,60,30,90,30,90,67,60,67,90];var e="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;var n=Math.PI/180;function o(t){return t*n}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});class r{constructor(t,e,n,o){this.gl=t,this.type=e,this.attributeLocation=this.gl.getAttribLocation(n,o),this.buffer=this.gl.createBuffer()}bufferFormat(t,e,n,o){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer),this.gl.vertexAttribPointer(this.attributeLocation,t,this.type,e,n,o),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(t,e){switch(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer),this.type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),e);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(t),e)}}}class a{constructor(t,e,n,o){this.gl=t,this.type=o,this.uniformLocation=t.getUniformLocation(e,n)}setData(...t){switch(this.type){case"uniform1f":this.gl.uniform1f(this.uniformLocation,t[0]);break;case"uniform2f":this.gl.uniform2f(this.uniformLocation,t[0],t[1]);break;case"uniform4f":this.gl.uniform4f(this.uniformLocation,t[0],t[1],t[2],t[3]);break;case"uniform2fv":this.gl.uniform2fv(this.uniformLocation,t[0]);break;case"uniform3fv":this.gl.uniform3fv(this.uniformLocation,t[0]);break;case"uniform4fv":this.gl.uniform4fv(this.uniformLocation,t[0]);break;case"uniformMatrix3fv":this.gl.uniformMatrix3fv(this.uniformLocation,!1,t[0]);break;case"uniformMatrix4fv":this.gl.uniformMatrix4fv(this.uniformLocation,!1,t[0]);break;default:throw new Error(`UniformClass: function ${this.type} has not been implemented.`)}}}function i(t,e,n){const o=t.createShader(e);t.shaderSource(o,n),t.compileShader(o);if(t.getShaderParameter(o,t.COMPILE_STATUS))return o;{const e=t.getShaderInfoLog(o);throw t.deleteShader(o),new Error("createShader: "+e)}}function s(){var t=new e(9);return e!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function c(t,e,n){var o=e[0],r=e[1],a=e[2],i=e[3],s=e[4],c=e[5],u=e[6],l=e[7],f=e[8],h=n[0],m=n[1],v=n[2],d=n[3],g=n[4],_=n[5],p=n[6],x=n[7],y=n[8];return t[0]=h*o+m*i+v*u,t[1]=h*r+m*s+v*l,t[2]=h*a+m*c+v*f,t[3]=d*o+g*i+_*u,t[4]=d*r+g*s+_*l,t[5]=d*a+g*c+_*f,t[6]=p*o+x*i+y*u,t[7]=p*r+x*s+y*l,t[8]=p*a+x*c+y*f,t}try{let e=!1,n=!1;const d=function(t,e="webgl2",n){const o=document.getElementById(t);if(!o)throw new Error(`createGLContext: Could not locate canvas element with id ${t}`);return{gl:o.getContext(e,n),canvas:o}}("my_canvas"),g=d.gl;!function(t){const e=t.clientWidth,n=t.clientHeight,o=t.width!==e||t.height!==n;o&&(t.width=e,t.height=n)}(d.canvas),g.viewport(0,0,g.canvas.width,g.canvas.height);const _=i(g,g.VERTEX_SHADER,"#version 300 es\n\nin vec2 a_position_v2;\n\nuniform vec2 u_resolution_v2;\nuniform mat3 u_transform_m3;\n\nvoid main() {\n  // Multiply the position by the matrix\n  vec2 position_v2 = (u_transform_m3 * vec3(a_position_v2, 1)).xy;\n\n  // convert the position from pixels to 0.0 to 1.0\n  vec2 zeroToOne_v2 = position_v2 / u_resolution_v2;\n\n  // convert from 0->1 to 0->2\n  vec2 zeroToTwo_v2 = zeroToOne_v2 * 2.0;\n\n  // convert from 0->2 to -1 -> +1 (clip space)\n  vec2 clipSpace_v2 = zeroToTwo_v2 - 1.0;\n\n  // flip and assign position\n  gl_Position = vec4(clipSpace_v2 * vec2(1, -1), 0, 1);\n}"),p=i(g,g.FRAGMENT_SHADER,"#version 300 es\n\nprecision highp float;\n\n// We need to declare an output for the fragment shader\nout vec4 outColor_v4;\n\nuniform vec4 u_color_v4;\n\nvoid main() {\n  outColor_v4 = u_color_v4;\n}\n"),x=function(t,e,n){const o=t.createProgram();if(t.attachShader(o,e),t.attachShader(o,n),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS))return o;{const e=t.getProgramInfoLog(o);throw t.deleteProgram(o),new Error("createProgram: "+e)}}(g,_,p);g.useProgram(x);const y=g.FLOAT,E=new r(g,y,x,"a_position_v2");E.setData(t,g.STATIC_DRAW);const A=g.createVertexArray();g.bindVertexArray(A);{const t=2,e=!1,n=0,o=0;E.bufferFormat(t,e,n,o)}new a(g,x,"u_resolution_v2","uniform2f").setData(g.canvas.width,g.canvas.height);new a(g,x,"u_color_v4","uniform4f").setData(Math.random(),Math.random(),Math.random(),1);const C=new a(g,x,"u_transform_m3","uniformMatrix3fv"),L=g.TRIANGLES,b=0,w=18;let B=[0,0],I=0,R=[1,1];function u(t){const e=s();var n,o;return o=t,(n=e)[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=1,n[5]=0,n[6]=o[0],n[7]=o[1],n[8]=1,e}function l(t){const e=s();var n,r,a,i;return n=e,r=o(t),a=Math.sin(r),i=Math.cos(r),n[0]=i,n[1]=a,n[2]=0,n[3]=-a,n[4]=i,n[5]=0,n[6]=0,n[7]=0,n[8]=1,e}function f(t){const e=s();var n,o;return o=t,(n=e)[0]=o[0],n[1]=0,n[2]=0,n[3]=0,n[4]=o[1],n[5]=0,n[6]=0,n[7]=0,n[8]=1,e}function h(){!function(t,e=[0,0,0,1]){t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)}(g);const t=u(B),o=l(I),r=f(R),a=s();if(e){const e=u([-50,-75]);c(a,t,o),c(a,a,r),c(a,a,e),C.setData(a),g.drawArrays(L,b,w)}else if(n)for(let e=0;e<5;e++)c(a,a,t),c(a,a,o),c(a,a,r),C.setData(a),g.drawArrays(L,b,w);else c(a,t,o),c(a,a,r),C.setData(a),g.drawArrays(L,b,w)}function m(t,e){B[t]=e,h()}function v(t,e){R[t]=e,h()}const S=document.getElementById("x_translate"),F=document.getElementById("y_translate"),T=document.getElementById("x_translate_output"),M=document.getElementById("y_translate_output");S.step=F.step=2,S.min=F.min=0,S.max=F.max=600,S.value=T.textContent=B[0],F.value=M.textContent=B[1],S.addEventListener("input",(()=>{const t=+S.value;T.textContent=t,m(0,t)})),F.addEventListener("input",(()=>{const t=+F.value;M.textContent=t,m(1,t)}));const D=document.getElementById("rotate"),P=document.getElementById("rotate_output");D.step=5,D.min=0,D.max=360,D.value=P.textContent=I,D.addEventListener("input",(()=>{const t=+D.value;P.textContent=t,I=t,h()}));const U=document.getElementById("x_scale"),k=document.getElementById("y_scale"),N=document.getElementById("x_scale_output"),O=document.getElementById("y_scale_output");U.step=k.step=.1,U.min=k.min=-5,U.max=k.max=5,U.value=N.textContent=R[0],k.value=O.textContent=R[1],U.addEventListener("input",(()=>{const t=+U.value;N.textContent=t,v(0,t)})),k.addEventListener("input",(()=>{const t=+k.value;O.textContent=t,v(1,t)}));const H=document.getElementById("do5");H.addEventListener("change",(()=>{H.checked?(n=!0,B=[60,40],I=0,R=[.85,.65],S.value=T.textContent=B[0],F.value=M.textContent=B[1],D.value=P.textContent=I,U.value=N.textContent=R[0],k.value=O.textContent=R[1],h()):(B=[0,0],I=0,R=[1,1],S.value=T.textContent=B[0],F.value=M.textContent=B[1],D.value=P.textContent=I,U.value=N.textContent=R[0],k.value=O.textContent=R[1],h(),n=!1,h())}));const z=document.getElementById("doCenter");z.addEventListener("change",(()=>{InitializeContext(g),z.checked?(e=!0,h()):(e=!1,B=[0,0],S.value=T.textContent=B[0],F.value=M.textContent=B[1],h())})),h()}catch(t){console.log(t)}
//# sourceMappingURL=index.945961de.js.map
