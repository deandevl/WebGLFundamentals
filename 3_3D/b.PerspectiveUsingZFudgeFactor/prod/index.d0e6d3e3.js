const t=[0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0],e=[200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,70,200,210,70,200,210,70,200,210,70,200,210,70,200,210,70,200,210,200,200,70,200,200,70,200,200,70,200,200,70,200,200,70,200,200,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,160,70,210,160,70,210,160,70,210,160,70,210,160,70,210,160,70,70,180,210,70,180,210,70,180,210,70,180,210,70,180,210,70,180,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,76,210,100,76,210,100,76,210,100,76,210,100,76,210,100,76,210,100,140,210,80,140,210,80,140,210,80,140,210,80,140,210,80,140,210,80,90,130,110,90,130,110,90,130,110,90,130,110,90,130,110,90,130,110,160,160,220,160,160,220,160,160,220,160,160,220,160,160,220,160,160,220];var n="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;var o=Math.PI/180;function a(t){return t*o}function r(){var t=new n(16);return n!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function i(t,e,n){var o=e[0],a=e[1],r=e[2],i=e[3],s=e[4],c=e[5],u=e[6],l=e[7],m=e[8],h=e[9],f=e[10],d=e[11],v=e[12],g=e[13],_=e[14],x=e[15],E=n[0],y=n[1],p=n[2],A=n[3];return t[0]=E*o+y*s+p*m+A*v,t[1]=E*a+y*c+p*h+A*g,t[2]=E*r+y*u+p*f+A*_,t[3]=E*i+y*l+p*d+A*x,E=n[4],y=n[5],p=n[6],A=n[7],t[4]=E*o+y*s+p*m+A*v,t[5]=E*a+y*c+p*h+A*g,t[6]=E*r+y*u+p*f+A*_,t[7]=E*i+y*l+p*d+A*x,E=n[8],y=n[9],p=n[10],A=n[11],t[8]=E*o+y*s+p*m+A*v,t[9]=E*a+y*c+p*h+A*g,t[10]=E*r+y*u+p*f+A*_,t[11]=E*i+y*l+p*d+A*x,E=n[12],y=n[13],p=n[14],A=n[15],t[12]=E*o+y*s+p*m+A*v,t[13]=E*a+y*c+p*h+A*g,t[14]=E*r+y*u+p*f+A*_,t[15]=E*i+y*l+p*d+A*x,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var s=function(t,e,n,o,a){var r,i=1/Math.tan(e/2);return t[0]=i/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=a&&a!==1/0?(r=1/(o-a),t[10]=(a+o)*r,t[14]=2*a*o*r):(t[10]=-1,t[14]=-2*o),t};var c=function(t,e,n,o,a,r,i){var s=1/(e-n),c=1/(o-a),u=1/(r-i);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+n)*s,t[13]=(a+o)*c,t[14]=(i+r)*u,t[15]=1,t};class u{constructor(t,e,n,o){this.gl=t,this.type=e,this.attributeLocation=this.gl.getAttribLocation(n,o),this.buffer=this.gl.createBuffer()}bufferFormat(t,e,n,o){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer),this.gl.vertexAttribPointer(this.attributeLocation,t,this.type,e,n,o),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(t,e){switch(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer),this.type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),e);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(t),e)}}}class l{static getOrthoMatrix(t,e,n,o,a,i){const s=r();return c(s,t,e,n,o,a,i),s}static getPerspectiveMatrix(t,e,n,o){const i=r();return s(i,a(t),e,n,o),i}static getTranslationMatrix(t){const e=r();var n,o;return o=t,(n=e)[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=o[0],n[13]=o[1],n[14]=o[2],n[15]=1,e}static getXYZRotationMatrix(t,e){const n=r();var o,i,s,c;return"x"===t?(o=n,i=a(e),s=Math.sin(i),c=Math.cos(i),o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=c,o[6]=s,o[7]=0,o[8]=0,o[9]=-s,o[10]=c,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1):"y"===t?function(t,e){var n=Math.sin(e),o=Math.cos(e);t[0]=o,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(n,a(e)):"z"===t&&function(t,e){var n=Math.sin(e),o=Math.cos(e);t[0]=o,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(n,a(e)),n}static getScaleMatrix(t){const e=r();var n,o;return o=t,(n=e)[0]=o[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=o[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=o[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,e}}class m{constructor(t,e,n,o){this.gl=t,this.type=o,this.uniformLocation=t.getUniformLocation(e,n)}setData(...t){switch(this.type){case"uniform1f":this.gl.uniform1f(this.uniformLocation,t[0]);break;case"uniform2f":this.gl.uniform2f(this.uniformLocation,t[0],t[1]);break;case"uniform4f":this.gl.uniform4f(this.uniformLocation,t[0],t[1],t[2],t[3]);break;case"uniform2fv":this.gl.uniform2fv(this.uniformLocation,t[0]);break;case"uniform3fv":this.gl.uniform3fv(this.uniformLocation,t[0]);break;case"uniform4fv":this.gl.uniform4fv(this.uniformLocation,t[0]);break;case"uniformMatrix3fv":this.gl.uniformMatrix3fv(this.uniformLocation,!1,t[0]);break;case"uniformMatrix4fv":this.gl.uniformMatrix4fv(this.uniformLocation,!1,t[0]);break;default:throw new Error(`UniformClass: function ${this.type} has not been implemented.`)}}}function h(t,e,n){const o=t.createShader(e);t.shaderSource(o,n),t.compileShader(o);if(t.getShaderParameter(o,t.COMPILE_STATUS))return o;{const e=t.getShaderInfoLog(o);throw t.deleteShader(o),new Error("createShader: "+e)}}try{const n=function(t,e="webgl2",n){const o=document.getElementById(t);if(!o)throw new Error(`createGLContext: Could not locate canvas element with id ${t}`);return{gl:o.getContext(e,n),canvas:o}}("my_canvas"),o=n.gl,a=n.canvas;o.enable(o.DEPTH_TEST),o.enable(o.CULL_FACE),o.depthFunc(o.LEQUAL),function(t){const e=t.clientWidth,n=t.clientHeight,o=t.width!==e||t.height!==n;o&&(t.width=e,t.height=n)}(a),o.viewport(0,0,o.canvas.width,o.canvas.height);const s=h(o,o.VERTEX_SHADER,"#version 300 es\n\nin vec4 a_position_v4;\nin vec4 a_color_v4;\n\nuniform mat4 u_matrix_m4;\nuniform float u_zFudgeFactor_f;\n\nout vec4 v_color_v4;\n\nvoid main() {\n  // Multiply the position by the matrix\n  vec4 position_v4 = u_matrix_m4 * a_position_v4;\n\n  // Adjust the z to divide by\n  float zToDivideBy_f = 1.0 + position_v4.z * u_zFudgeFactor_f;\n\n  // Divide x and y by z\n  gl_Position = vec4(position_v4.xy / zToDivideBy_f, position_v4.zw);\n\n  // Pass the color to the fragment shader\n  v_color_v4 = a_color_v4;\n}"),c=h(o,o.FRAGMENT_SHADER,"#version 300 es\n\nprecision highp float;\n\n// Passed in from the vertex shader\nin vec4 v_color_v4;\n\n// We need to declare an output for the fragment shader\nout vec4 outColor_v4;\n\nvoid main() {\n  outColor_v4 = v_color_v4;\n}"),_=function(t,e,n){const o=t.createProgram();if(t.attachShader(o,e),t.attachShader(o,n),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS))return o;{const e=t.getProgramInfoLog(o);throw t.deleteProgram(o),new Error("createProgram: "+e)}}(o,s,c);o.useProgram(_);const x=o.FLOAT,E=new u(o,x,_,"a_position_v4");E.setData(t,o.STATIC_DRAW);const y=o.UNSIGNED_BYTE,p=new u(o,y,_,"a_color_v4");p.setData(e,o.STATIC_DRAW);const A=o.createVertexArray();o.bindVertexArray(A);{const t=3,e=!1,n=0,o=0;E.bufferFormat(t,e,n,o)}{const t=3,e=!0,n=0,o=0;p.bufferFormat(t,e,n,o)}const L=new m(o,_,"u_matrix_m4","uniformMatrix4fv"),B=new m(o,_,"u_zFudgeFactor_f","uniform1f"),b=o.TRIANGLES,C=0,I=96;let M=[0,0,0],F=[0,0,0],R=[1,1,1],w=0;const S=400,T=-400,D=l.getOrthoMatrix(0,o.canvas.clientWidth,o.canvas.clientHeight,0,S,T);function f(){!function(t,e=[0,0,0,1]){t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)}(o);const t=l.getTranslationMatrix(M),e=l.getXYZRotationMatrix("x",F[0]),n=l.getXYZRotationMatrix("y",F[1]),a=l.getXYZRotationMatrix("z",F[2]),s=l.getScaleMatrix(R),c=r();i(c,D,t),i(c,c,e),i(c,c,n),i(c,c,a),i(c,c,s),L.setData(c),B.setData(w),o.drawArrays(b,C,I)}function d(t,e){M[t]=e,f()}function v(t,e){F[t]=e,f()}function g(t,e){R[t]=e,f()}const P=document.getElementById("z_fudgefactor"),z=document.getElementById("z_fudgefactor_output");P.step=.2,P.min=0,P.max=2,P.value=w,z.textContent=w,P.addEventListener("input",(()=>{w=+P.value,z.textContent=P.value,f()}));const U=document.getElementById("x_translate"),k=document.getElementById("y_translate"),N=document.getElementById("z_translate"),Y=document.getElementById("x_translate_output"),H=document.getElementById("y_translate_output"),O=document.getElementById("z_translate_output");U.min=0,U.max=o.canvas.width,U.step=2,U.value=M[0],Y.textContent=M[0],k.min=0,k.max=o.canvas.height,k.step=2,k.value=M[1],H.textContent=M[1],N.min=-o.canvas.height,N.max=o.canvas.height,N.step=2,N.value=M[2],O.textContent=M[2],U.addEventListener("input",(()=>{const t=+U.value;Y.textContent=t,d(0,t)})),k.addEventListener("input",(()=>{const t=+k.value;H.textContent=t,d(1,t)})),N.addEventListener("input",(()=>{const t=+N.value;O.textContent=t,d(2,t)}));const G=document.getElementById("x_rotate"),W=document.getElementById("y_rotate"),X=document.getElementById("z_rotate"),V=document.getElementById("x_rotate_output"),Z=document.getElementById("y_rotate_output"),$=document.getElementById("z_rotate_output");G.step=W.step=X.step=5,G.min=W.min=X.min=0,G.max=W.max=X.max=360,G.value=V.textContent=F[0],W.value=Z.textContent=F[1],X.value=$.textContent=F[2],G.addEventListener("input",(()=>{const t=+G.value;V.textContent=t,v(0,t)})),W.addEventListener("input",(()=>{const t=+W.value;Z.textContent=t,v(1,t)})),X.addEventListener("input",(()=>{const t=+X.value;$.textContent=t,v(2,t)}));const j=document.getElementById("x_scale"),q=document.getElementById("y_scale"),K=document.getElementById("z_scale"),Q=document.getElementById("x_scale_output"),J=document.getElementById("y_scale_output"),tt=document.getElementById("z_scale_output");j.step=q.step=K.step=.1,j.min=q.min=K.min=-5,j.max=q.max=K.max=5,j.value=Q.textContent=R[0],q.value=J.textContent=R[1],K.value=tt.textContent=R[2],j.addEventListener("input",(()=>{const t=+j.value;Q.textContent=t,g(0,t)})),q.addEventListener("input",(()=>{const t=+q.value;J.textContent=t,g(1,t)})),K.addEventListener("input",(()=>{const t=+K.value;tt.textContent=t,g(2,t)})),f()}catch(t){console.log(t)}
//# sourceMappingURL=index.d0e6d3e3.js.map