const t=[0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0],e=[200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,70,200,210,70,200,210,70,200,210,70,200,210,70,200,210,70,200,210,200,200,70,200,200,70,200,200,70,200,200,70,200,200,70,200,200,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,160,70,210,160,70,210,160,70,210,160,70,210,160,70,210,160,70,70,180,210,70,180,210,70,180,210,70,180,210,70,180,210,70,180,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,76,210,100,76,210,100,76,210,100,76,210,100,76,210,100,76,210,100,140,210,80,140,210,80,140,210,80,140,210,80,140,210,80,140,210,80,90,130,110,90,130,110,90,130,110,90,130,110,90,130,110,90,130,110,160,160,220,160,160,220,160,160,220,160,160,220,160,160,220,160,160,220];var n="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;var a=Math.PI/180;function o(t){return t*a}function r(){var t=new n(16);return n!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function i(t,e,n){var a=e[0],o=e[1],r=e[2],i=e[3],s=e[4],c=e[5],u=e[6],l=e[7],h=e[8],d=e[9],f=e[10],m=e[11],v=e[12],g=e[13],_=e[14],y=e[15],x=n[0],p=n[1],E=n[2],A=n[3];return t[0]=x*a+p*s+E*h+A*v,t[1]=x*o+p*c+E*d+A*g,t[2]=x*r+p*u+E*f+A*_,t[3]=x*i+p*l+E*m+A*y,x=n[4],p=n[5],E=n[6],A=n[7],t[4]=x*a+p*s+E*h+A*v,t[5]=x*o+p*c+E*d+A*g,t[6]=x*r+p*u+E*f+A*_,t[7]=x*i+p*l+E*m+A*y,x=n[8],p=n[9],E=n[10],A=n[11],t[8]=x*a+p*s+E*h+A*v,t[9]=x*o+p*c+E*d+A*g,t[10]=x*r+p*u+E*f+A*_,t[11]=x*i+p*l+E*m+A*y,x=n[12],p=n[13],E=n[14],A=n[15],t[12]=x*a+p*s+E*h+A*v,t[13]=x*o+p*c+E*d+A*g,t[14]=x*r+p*u+E*f+A*_,t[15]=x*i+p*l+E*m+A*y,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var s=function(t,e,n,a,o){var r,i=1/Math.tan(e/2);return t[0]=i/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=o&&o!==1/0?(r=1/(a-o),t[10]=(o+a)*r,t[14]=2*o*a*r):(t[10]=-1,t[14]=-2*a),t};var c=function(t,e,n,a,o,r,i){var s=1/(e-n),c=1/(a-o),u=1/(r-i);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+n)*s,t[13]=(o+a)*c,t[14]=(i+r)*u,t[15]=1,t};function u(t,e,n){const a=t.createShader(e);t.shaderSource(a,n),t.compileShader(a);if(t.getShaderParameter(a,t.COMPILE_STATUS))return a;{const e=t.getShaderInfoLog(a);throw t.deleteShader(a),new Error(`HelperFunctions-createShader-Error: ${e}`)}}class l{constructor(t,e,n,a){this.gl=t,this.buffer_type="ARRAY",this.data_type=e,this.attributeLocation=this.gl.getAttribLocation(n,a),this.arrayBuffer=this.gl.createBuffer()}bufferFormat(t,e,n,a){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),this.gl.vertexAttribPointer(this.attributeLocation,t,this.data_type,e,n,a),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(t,e){let n;if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),n=t,"number"==typeof t[0]){n=new Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}else if(Array.isArray(t)){n=new Array(t.length*t[0].length);for(let e=0;e<t.length;e++)for(let a=0;a<t[0].length;a++)n[e*t[0].length+a]=t[e][a]}switch(this.data_type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(n),e);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(n),e)}}delete(){this.gl.deleteBuffer(this.arrayBuffer)}}class h{static getOrthoMatrix(t,e,n,a,o,i){const s=r();return c(s,t,e,n,a,o,i),s}static getPerspectiveMatrix(t,e,n,a){const i=r();return s(i,o(t),e,n,a),i}static getTranslationMatrix(t){const e=r();var n,a;return a=t,(n=e)[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=a[0],n[13]=a[1],n[14]=a[2],n[15]=1,e}static getRotationMatrix(t,e){const n=r();var a,i,s,c,u,l,h,d,f,m;return a=n,i=o(t),h=(s=e)[0],d=s[1],f=s[2],!((m=Math.hypot(h,d,f))<1e-6)&&(h*=m=1/m,d*=m,f*=m,c=Math.sin(i),l=1-(u=Math.cos(i)),a[0]=h*h*l+u,a[1]=d*h*l+f*c,a[2]=f*h*l-d*c,a[3]=0,a[4]=h*d*l-f*c,a[5]=d*d*l+u,a[6]=f*d*l+h*c,a[7]=0,a[8]=h*f*l+d*c,a[9]=d*f*l-h*c,a[10]=f*f*l+u,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1),n}static getXYZRotationMatrix(t,e){const n=r();var a,i,s,c;return"x"===t?(a=n,i=o(e),s=Math.sin(i),c=Math.cos(i),a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=c,a[6]=s,a[7]=0,a[8]=0,a[9]=-s,a[10]=c,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1):"y"===t?function(t,e){var n=Math.sin(e),a=Math.cos(e);t[0]=a,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(n,o(e)):"z"===t&&function(t,e){var n=Math.sin(e),a=Math.cos(e);t[0]=a,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(n,o(e)),n}static getScaleMatrix(t){const e=r();var n,a;return a=t,(n=e)[0]=a[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=a[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=a[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,e}}class d{constructor(t,e,n,a){this.gl=t,this.data_type=a,this.data=null,this.uniformLocation=t.getUniformLocation(e,n)}setData(...t){switch(this.data_type){case"uniform1i":this.gl.uniform1i(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform1f":this.gl.uniform1f(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform2f":this.gl.uniform2f(this.uniformLocation,t[0],t[1]),this.data=[t[0],t[1]];break;case"uniform4f":this.gl.uniform4f(this.uniformLocation,t[0],t[1],t[2],t[3]),this.data=[t[0],t[1],t[2],t[3]];break;case"uniform2fv":this.gl.uniform2fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform3fv":this.gl.uniform3fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform4fv":this.gl.uniform4fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniformMatrix3fv":this.gl.uniformMatrix3fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;case"uniformMatrix4fv":this.gl.uniformMatrix4fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;default:throw new Error(`UniformClass: function ${this.type} has not been implemented.`)}}}try{const n=function(t,e="webgl2",n){const a=document.getElementById(t);if(!a)throw new Error(`HelperFunctions-createGLContext-Error: Could not locate canvas element with id ${t}`);return{gl:a.getContext(e,n),canvas:a}}("my_canvas"),a=n.gl,o=n.canvas;a.enable(a.DEPTH_TEST),a.enable(a.CULL_FACE),a.depthFunc(a.LEQUAL),function(t){const e=t.clientWidth,n=t.clientHeight,a=t.width!==e||t.height!==n;a&&(t.width=e,t.height=n)}(o),a.viewport(0,0,a.canvas.width,a.canvas.height);const s=u(a,a.VERTEX_SHADER,"#version 300 es\n\nin vec4 a_position_v4;\nin vec4 a_color_v4;\n\nuniform mat4 u_matrix_m4;\nuniform float u_zFudgeFactor_f;\n\nout vec4 v_color_v4;\n\nvoid main() {\n  // Multiply the position by the matrix\n  vec4 position_v4 = u_matrix_m4 * a_position_v4;\n\n  // Adjust the z to divide by\n  float zToDivideBy_f = 1.0 + position_v4.z * u_zFudgeFactor_f;\n\n  // Divide x and y by z\n  gl_Position = vec4(position_v4.xy / zToDivideBy_f, position_v4.zw);\n\n  // Pass the color to the fragment shader\n  v_color_v4 = a_color_v4;\n}"),c=u(a,a.FRAGMENT_SHADER,"#version 300 es\n\nprecision highp float;\n\n// Passed in from the vertex shader\nin vec4 v_color_v4;\n\n// We need to declare an output for the fragment shader\nout vec4 outColor_v4;\n\nvoid main() {\n  outColor_v4 = v_color_v4;\n}"),_=function(t,e,n){const a=t.createProgram();if(t.attachShader(a,e),t.attachShader(a,n),t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS))return a;{const e=t.getProgramInfoLog(a);throw t.deleteProgram(a),new Error(`HelperFunctions-createProgram-Error: ${e}`)}}(a,s,c);a.useProgram(_);const y=a.FLOAT,x=new l(a,y,_,"a_position_v4");x.setData(t,a.STATIC_DRAW);const p=a.UNSIGNED_BYTE,E=new l(a,p,_,"a_color_v4");E.setData(e,a.STATIC_DRAW);const A=a.createVertexArray();a.bindVertexArray(A);{const t=3,e=!1,n=0,a=0;x.bufferFormat(t,e,n,a)}{const t=3,e=!0,n=0,a=0;E.bufferFormat(t,e,n,a)}const B=new d(a,_,"u_matrix_m4","uniformMatrix4fv"),L=new d(a,_,"u_zFudgeFactor_f","uniform1f"),b=a.TRIANGLES,M=0,F=96;let C=[0,0,0],I=[0,0,0],R=[1,1,1],w=0;const T=400,S=-400,D=h.getOrthoMatrix(0,a.canvas.clientWidth,a.canvas.clientHeight,0,T,S);function f(){!function(t,e=[.9,.9,.9,1]){t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL)}(a);const t=h.getTranslationMatrix(C),e=h.getXYZRotationMatrix("x",I[0]),n=h.getXYZRotationMatrix("y",I[1]),o=h.getXYZRotationMatrix("z",I[2]),s=h.getScaleMatrix(R),c=r();i(c,D,t),i(c,c,e),i(c,c,n),i(c,c,o),i(c,c,s),B.setData(c),L.setData(w),a.drawArrays(b,M,F)}function m(t,e){C[t]=e,f()}function v(t,e){I[t]=e,f()}function g(t,e){R[t]=e,f()}const z=document.getElementById("z_fudgefactor"),P=document.getElementById("z_fudgefactor_output");z.step=.2,z.min=0,z.max=2,z.value=w,P.textContent=w,z.addEventListener("input",(()=>{w=+z.value,P.textContent=z.value,f()}));const U=document.getElementById("x_translate"),k=document.getElementById("y_translate"),Y=document.getElementById("z_translate"),H=document.getElementById("x_translate_output"),N=document.getElementById("y_translate_output"),O=document.getElementById("z_translate_output");U.min=0,U.max=a.canvas.width,U.step=2,U.value=C[0],H.textContent=C[0],k.min=0,k.max=a.canvas.height,k.step=2,k.value=C[1],N.textContent=C[1],Y.min=-a.canvas.height,Y.max=a.canvas.height,Y.step=2,Y.value=C[2],O.textContent=C[2],U.addEventListener("input",(()=>{const t=+U.value;H.textContent=t,m(0,t)})),k.addEventListener("input",(()=>{const t=+k.value;N.textContent=t,m(1,t)})),Y.addEventListener("input",(()=>{const t=+Y.value;O.textContent=t,m(2,t)}));const G=document.getElementById("x_rotate"),W=document.getElementById("y_rotate"),X=document.getElementById("z_rotate"),V=document.getElementById("x_rotate_output"),Z=document.getElementById("y_rotate_output"),$=document.getElementById("z_rotate_output");G.step=W.step=X.step=5,G.min=W.min=X.min=0,G.max=W.max=X.max=360,G.value=V.textContent=I[0],W.value=Z.textContent=I[1],X.value=$.textContent=I[2],G.addEventListener("input",(()=>{const t=+G.value;V.textContent=t,v(0,t)})),W.addEventListener("input",(()=>{const t=+W.value;Z.textContent=t,v(1,t)})),X.addEventListener("input",(()=>{const t=+X.value;$.textContent=t,v(2,t)}));const Q=document.getElementById("x_scale"),j=document.getElementById("y_scale"),q=document.getElementById("z_scale"),K=document.getElementById("x_scale_output"),J=document.getElementById("y_scale_output"),tt=document.getElementById("z_scale_output");Q.step=j.step=q.step=.1,Q.min=j.min=q.min=-5,Q.max=j.max=q.max=5,Q.value=K.textContent=R[0],j.value=J.textContent=R[1],q.value=tt.textContent=R[2],Q.addEventListener("input",(()=>{const t=+Q.value;K.textContent=t,g(0,t)})),j.addEventListener("input",(()=>{const t=+j.value;J.textContent=t,g(1,t)})),q.addEventListener("input",(()=>{const t=+q.value;tt.textContent=t,g(2,t)})),f()}catch(t){console.log(t)}
//# sourceMappingURL=index.1eb5f0e5.js.map