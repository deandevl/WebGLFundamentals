const t=[0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0],e=[200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,70,200,210,70,200,210,70,200,210,70,200,210,70,200,210,70,200,210,200,200,70,200,200,70,200,200,70,200,200,70,200,200,70,200,200,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,160,70,210,160,70,210,160,70,210,160,70,210,160,70,210,160,70,70,180,210,70,180,210,70,180,210,70,180,210,70,180,210,70,180,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,76,210,100,76,210,100,76,210,100,76,210,100,76,210,100,76,210,100,140,210,80,140,210,80,140,210,80,140,210,80,140,210,80,140,210,80,90,130,110,90,130,110,90,130,110,90,130,110,90,130,110,90,130,110,160,160,220,160,160,220,160,160,220,160,160,220,160,160,220,160,160,220];var n="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;var a=Math.PI/180;function r(t){return t*a}function o(){var t=new n(16);return n!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function i(t,e,n){var a=e[0],r=e[1],o=e[2],i=e[3],s=e[4],c=e[5],u=e[6],l=e[7],h=e[8],m=e[9],f=e[10],d=e[11],g=e[12],v=e[13],_=e[14],x=e[15],y=n[0],E=n[1],p=n[2],A=n[3];return t[0]=y*a+E*s+p*h+A*g,t[1]=y*r+E*c+p*m+A*v,t[2]=y*o+E*u+p*f+A*_,t[3]=y*i+E*l+p*d+A*x,y=n[4],E=n[5],p=n[6],A=n[7],t[4]=y*a+E*s+p*h+A*g,t[5]=y*r+E*c+p*m+A*v,t[6]=y*o+E*u+p*f+A*_,t[7]=y*i+E*l+p*d+A*x,y=n[8],E=n[9],p=n[10],A=n[11],t[8]=y*a+E*s+p*h+A*g,t[9]=y*r+E*c+p*m+A*v,t[10]=y*o+E*u+p*f+A*_,t[11]=y*i+E*l+p*d+A*x,y=n[12],E=n[13],p=n[14],A=n[15],t[12]=y*a+E*s+p*h+A*g,t[13]=y*r+E*c+p*m+A*v,t[14]=y*o+E*u+p*f+A*_,t[15]=y*i+E*l+p*d+A*x,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var s=function(t,e,n,a,r){var o,i=1/Math.tan(e/2);return t[0]=i/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=r&&r!==1/0?(o=1/(a-r),t[10]=(r+a)*o,t[14]=2*r*a*o):(t[10]=-1,t[14]=-2*a),t};var c=function(t,e,n,a,r,o,i){var s=1/(e-n),c=1/(a-r),u=1/(o-i);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+n)*s,t[13]=(r+a)*c,t[14]=(i+o)*u,t[15]=1,t};function u(t,e,n){const a=t.createShader(e);t.shaderSource(a,n),t.compileShader(a);if(t.getShaderParameter(a,t.COMPILE_STATUS))return a;{const e=t.getShaderInfoLog(a);throw t.deleteShader(a),new Error(`HelperFunctions-createShader-Error: ${e}`)}}class l{constructor(t,e,n,a){this.gl=t,this.buffer_type="ARRAY",this.data_type=e,this.attributeLocation=this.gl.getAttribLocation(n,a),this.arrayBuffer=this.gl.createBuffer()}bufferFormat(t,e,n,a){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),this.gl.vertexAttribPointer(this.attributeLocation,t,this.data_type,e,n,a),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(t,e){let n;if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),n=t,"number"==typeof t[0]){n=new Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}else if(Array.isArray(t)){n=new Array(t.length*t[0].length);for(let e=0;e<t.length;e++)for(let a=0;a<t[0].length;a++)n[e*t[0].length+a]=t[e][a]}switch(this.data_type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(n),e);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(n),e)}}delete(){this.gl.deleteBuffer(this.arrayBuffer)}}class h{static getOrthoMatrix(t,e,n,a,r,i){const s=o();return c(s,t,e,n,a,r,i),s}static getPerspectiveMatrix(t,e,n,a){const i=o();return s(i,r(t),e,n,a),i}static getTranslationMatrix(t){const e=o();var n,a;return a=t,(n=e)[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=a[0],n[13]=a[1],n[14]=a[2],n[15]=1,e}static getRotationMatrix(t,e){const n=o();var a,i,s,c,u,l,h,m,f,d;return a=n,i=r(t),h=(s=e)[0],m=s[1],f=s[2],!((d=Math.hypot(h,m,f))<1e-6)&&(h*=d=1/d,m*=d,f*=d,c=Math.sin(i),l=1-(u=Math.cos(i)),a[0]=h*h*l+u,a[1]=m*h*l+f*c,a[2]=f*h*l-m*c,a[3]=0,a[4]=h*m*l-f*c,a[5]=m*m*l+u,a[6]=f*m*l+h*c,a[7]=0,a[8]=h*f*l+m*c,a[9]=m*f*l-h*c,a[10]=f*f*l+u,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1),n}static getXYZRotationMatrix(t,e){const n=o();var a,i,s,c;return"x"===t?(a=n,i=r(e),s=Math.sin(i),c=Math.cos(i),a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=c,a[6]=s,a[7]=0,a[8]=0,a[9]=-s,a[10]=c,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1):"y"===t?function(t,e){var n=Math.sin(e),a=Math.cos(e);t[0]=a,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(n,r(e)):"z"===t&&function(t,e){var n=Math.sin(e),a=Math.cos(e);t[0]=a,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(n,r(e)),n}static getScaleMatrix(t){const e=o();var n,a;return a=t,(n=e)[0]=a[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=a[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=a[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,e}}class m{constructor(t,e,n,a){this.gl=t,this.data_type=a,this.data=null,this.uniformLocation=t.getUniformLocation(e,n)}setData(...t){switch(this.data_type){case"uniform1i":this.gl.uniform1i(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform1f":this.gl.uniform1f(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform2f":this.gl.uniform2f(this.uniformLocation,t[0],t[1]),this.data=[t[0],t[1]];break;case"uniform4f":this.gl.uniform4f(this.uniformLocation,t[0],t[1],t[2],t[3]),this.data=[t[0],t[1],t[2],t[3]];break;case"uniform2fv":this.gl.uniform2fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform3fv":this.gl.uniform3fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform4fv":this.gl.uniform4fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniformMatrix3fv":this.gl.uniformMatrix3fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;case"uniformMatrix4fv":this.gl.uniformMatrix4fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;default:throw new Error(`UniformClass: function ${this.type} has not been implemented.`)}}}try{const n=function(t,e="webgl2",n){const a=document.getElementById(t);if(!a)throw new Error(`HelperFunctions-createGLContext-Error: Could not locate canvas element with id ${t}`);return{gl:a.getContext(e,n),canvas:a}}("my_canvas"),a=n.gl,r=n.canvas;a.enable(a.DEPTH_TEST),a.enable(a.CULL_FACE),a.depthFunc(a.LEQUAL),function(t){const e=t.clientWidth,n=t.clientHeight,a=t.width!==e||t.height!==n;a&&(t.width=e,t.height=n)}(r),a.viewport(0,0,a.canvas.width,a.canvas.height);const s=u(a,a.VERTEX_SHADER,"#version 300 es\n\nin vec4 a_position_v4;\nin vec4 a_color_v4;\n\nuniform mat4 u_matrix_m4;\n\nout vec4 v_color_v4;\n\nvoid main() {\n  // Multiply the position by the matrix\n  gl_Position = u_matrix_m4 * a_position_v4;\n\n  // Pass the color to the fragment shader\n  v_color_v4 = a_color_v4;\n}"),c=u(a,a.FRAGMENT_SHADER,"#version 300 es\n\nprecision highp float;\n\n// Passed in from the vertex shader\nin vec4 v_color_v4;\n\nout vec4 outColor_v4;\n\nvoid main() {\n  outColor_v4 = v_color_v4;\n}"),_=function(t,e,n){const a=t.createProgram();if(t.attachShader(a,e),t.attachShader(a,n),t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS))return a;{const e=t.getProgramInfoLog(a);throw t.deleteProgram(a),new Error(`HelperFunctions-createProgram-Error: ${e}`)}}(a,s,c);a.useProgram(_);const x=a.FLOAT,y=new l(a,x,_,"a_position_v4");y.setData(t,a.STATIC_DRAW);const E=a.UNSIGNED_BYTE,p=new l(a,E,_,"a_color_v4");p.setData(e,a.STATIC_DRAW);const A=a.createVertexArray();a.bindVertexArray(A);{const t=3,e=!1,n=0,a=0;y.bufferFormat(t,e,n,a)}{const t=3,e=!0,n=0,a=0;p.bufferFormat(t,e,n,a)}const L=new m(a,_,"u_matrix_m4","uniformMatrix4fv"),B=a.TRIANGLES,M=0,b=96;let C=[-150,120,-380],I=[180,0,0],R=[1,1,1],F=60;const w=a.canvas.clientWidth/a.canvas.clientHeight,T=1,S=2e3;function f(){!function(t,e=[.9,.9,.9,1]){t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL)}(a);const t=h.getPerspectiveMatrix(F,w,T,S),e=h.getTranslationMatrix(C),n=h.getXYZRotationMatrix("x",I[0]),r=h.getXYZRotationMatrix("y",I[1]),s=h.getXYZRotationMatrix("z",I[2]),c=h.getScaleMatrix(R),u=o();i(u,t,e),i(u,u,n),i(u,u,r),i(u,u,s),i(u,u,c),L.setData(u),a.drawArrays(B,M,b)}function d(t,e){C[t]=e,f()}function g(t,e){I[t]=e,f()}function v(t,e){R[t]=e,f()}const P=document.getElementById("fieldOfView"),D=document.getElementById("fieldOfView_output");P.step=.2,P.min=1,P.max=179,P.value=F,D.textContent=F,P.addEventListener("input",(()=>{const t=+P.value;D.textContent=P.value,F=t,f()}));const U=document.getElementById("x_translate"),k=document.getElementById("y_translate"),Y=document.getElementById("z_translate"),H=document.getElementById("x_translate_output"),z=document.getElementById("y_translate_output"),O=document.getElementById("z_translate_output");U.min=-200,U.max=200,U.step=2,U.value=C[0],H.textContent=C[0],k.min=-200,k.max=200,k.step=2,k.value=C[1],z.textContent=C[1],Y.min=-1e3,Y.max=0,Y.step=5,Y.value=C[2],O.textContent=C[2],U.addEventListener("input",(()=>{const t=+U.value;H.textContent=t,d(0,t)})),k.addEventListener("input",(()=>{const t=+k.value;z.textContent=t,d(1,t)})),Y.addEventListener("input",(()=>{const t=+Y.value;O.textContent=t,d(2,t)}));const N=document.getElementById("x_rotate"),V=document.getElementById("y_rotate"),G=document.getElementById("z_rotate"),X=document.getElementById("x_rotate_output"),W=document.getElementById("y_rotate_output"),Z=document.getElementById("z_rotate_output");N.step=V.step=G.step=5,N.min=V.min=G.min=0,N.max=V.max=G.max=360,N.value=X.textContent=I[0],V.value=W.textContent=I[1],G.value=Z.textContent=I[2],N.addEventListener("input",(()=>{const t=+N.value;X.textContent=t,g(0,t)})),V.addEventListener("input",(()=>{const t=+V.value;W.textContent=t,g(1,t)})),G.addEventListener("input",(()=>{const t=+G.value;Z.textContent=t,g(2,t)}));const $=document.getElementById("x_scale"),Q=document.getElementById("y_scale"),q=document.getElementById("z_scale"),K=document.getElementById("x_scale_output"),j=document.getElementById("y_scale_output"),J=document.getElementById("z_scale_output");$.step=Q.step=q.step=.1,$.min=Q.min=q.min=-5,$.max=Q.max=q.max=5,$.value=K.textContent=R[0],Q.value=j.textContent=R[1],q.value=J.textContent=R[2],$.addEventListener("input",(()=>{const t=+$.value;K.textContent=t,v(0,t)})),Q.addEventListener("input",(()=>{const t=+Q.value;j.textContent=t,v(1,t)})),q.addEventListener("input",(()=>{const t=+q.value;J.textContent=t,v(2,t)})),f()}catch(t){console.log(t)}
//# sourceMappingURL=index.a9ef8742.js.map