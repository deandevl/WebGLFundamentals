const t=[0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0],e=[0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0];var n="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;var a=Math.PI/180;function i(t){return t*a}function r(){var t=new n(16);return n!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function o(t,e,n){var a=e[0],i=e[1],r=e[2],o=e[3],s=e[4],c=e[5],l=e[6],u=e[7],h=e[8],m=e[9],g=e[10],f=e[11],d=e[12],E=e[13],_=e[14],v=e[15],x=n[0],T=n[1],A=n[2],R=n[3];return t[0]=x*a+T*s+A*h+R*d,t[1]=x*i+T*c+A*m+R*E,t[2]=x*r+T*l+A*g+R*_,t[3]=x*o+T*u+A*f+R*v,x=n[4],T=n[5],A=n[6],R=n[7],t[4]=x*a+T*s+A*h+R*d,t[5]=x*i+T*c+A*m+R*E,t[6]=x*r+T*l+A*g+R*_,t[7]=x*o+T*u+A*f+R*v,x=n[8],T=n[9],A=n[10],R=n[11],t[8]=x*a+T*s+A*h+R*d,t[9]=x*i+T*c+A*m+R*E,t[10]=x*r+T*l+A*g+R*_,t[11]=x*o+T*u+A*f+R*v,x=n[12],T=n[13],A=n[14],R=n[15],t[12]=x*a+T*s+A*h+R*d,t[13]=x*i+T*c+A*m+R*E,t[14]=x*r+T*l+A*g+R*_,t[15]=x*o+T*u+A*f+R*v,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var s=function(t,e,n,a,i){var r,o=1/Math.tan(e/2);return t[0]=o/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(r=1/(a-i),t[10]=(i+a)*r,t[14]=2*i*a*r):(t[10]=-1,t[14]=-2*a),t};var c=function(t,e,n,a,i,r,o){var s=1/(e-n),c=1/(a-i),l=1/(r-o);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(e+n)*s,t[13]=(i+a)*c,t[14]=(o+r)*l,t[15]=1,t};class l{constructor(t,e,n,a){this.gl=t,this.type=e,this.attributeLocation=this.gl.getAttribLocation(n,a),this.buffer=this.gl.createBuffer()}bufferFormat(t,e,n,a){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer),this.gl.vertexAttribPointer(this.attributeLocation,t,this.type,e,n,a),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(t,e){switch(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer),this.type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),e);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(t),e)}}}class u{constructor(t){this.gl=t}setColor(t){const e=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array(t))}async loadTexture(t){this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array([0,0,255,255]));let e=await fetch(t),n=await e.blob(),a=await createImageBitmap(n,{imageOrientation:"flipY"});const i=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,a)}}class h{static getOrthoMatrix(t,e,n,a,i,o){const s=r();return c(s,t,e,n,a,i,o),s}static getPerspectiveMatrix(t,e,n,a){const o=r();return s(o,i(t),e,n,a),o}static getTranslationMatrix(t){const e=r();var n,a;return a=t,(n=e)[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=a[0],n[13]=a[1],n[14]=a[2],n[15]=1,e}static getXYZRotationMatrix(t,e){const n=r();var a,o,s,c;return"x"===t?(a=n,o=i(e),s=Math.sin(o),c=Math.cos(o),a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=c,a[6]=s,a[7]=0,a[8]=0,a[9]=-s,a[10]=c,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1):"y"===t?function(t,e){var n=Math.sin(e),a=Math.cos(e);t[0]=a,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(n,i(e)):"z"===t&&function(t,e){var n=Math.sin(e),a=Math.cos(e);t[0]=a,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(n,i(e)),n}static getScaleMatrix(t){const e=r();var n,a;return a=t,(n=e)[0]=a[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=a[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=a[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,e}}class m{constructor(t,e,n,a){this.gl=t,this.type=a,this.uniformLocation=t.getUniformLocation(e,n)}setData(...t){switch(this.type){case"uniform1f":this.gl.uniform1f(this.uniformLocation,t[0]);break;case"uniform2f":this.gl.uniform2f(this.uniformLocation,t[0],t[1]);break;case"uniform4f":this.gl.uniform4f(this.uniformLocation,t[0],t[1],t[2],t[3]);break;case"uniform2fv":this.gl.uniform2fv(this.uniformLocation,t[0]);break;case"uniform3fv":this.gl.uniform3fv(this.uniformLocation,t[0]);break;case"uniform4fv":this.gl.uniform4fv(this.uniformLocation,t[0]);break;case"uniformMatrix3fv":this.gl.uniformMatrix3fv(this.uniformLocation,!1,t[0]);break;case"uniformMatrix4fv":this.gl.uniformMatrix4fv(this.uniformLocation,!1,t[0]);break;default:throw new Error(`UniformClass: function ${this.type} has not been implemented.`)}}}function g(t,e,n){const a=t.createShader(e);t.shaderSource(a,n),t.compileShader(a);if(t.getShaderParameter(a,t.COMPILE_STATUS))return a;{const e=t.getShaderInfoLog(a);throw t.deleteShader(a),new Error("createShader: "+e)}}try{const n=function(t,e="webgl2",n){const a=document.getElementById(t);if(!a)throw new Error(`createGLContext: Could not locate canvas element with id ${t}`);return{gl:a.getContext(e,n),canvas:a}}("my_canvas"),a=n.gl,i=n.canvas;a.enable(a.DEPTH_TEST),a.enable(a.CULL_FACE),a.depthFunc(a.LEQUAL),function(t){const e=t.clientWidth,n=t.clientHeight,a=t.width!==e||t.height!==n;a&&(t.width=e,t.height=n)}(i),a.viewport(0,0,a.canvas.width,a.canvas.height);const s=g(a,a.VERTEX_SHADER,"#version 300 es\n\nin vec4 a_position_v4;\nin vec2 a_texcoord_v2;\n\nuniform mat4 u_matrix_m4;\n\nout vec2 v_texcoord_v2;\n\nvoid main() {\n  // Multiply the position by the matrix\n  gl_Position = u_matrix_m4 * a_position_v4;\n\n  // Pass the texcoord to the fragment shader\n  v_texcoord_v2 = a_texcoord_v2;\n}"),c=g(a,a.FRAGMENT_SHADER,"#version 300 es\n\nprecision highp float;\n\n// Passed in from the vertex shader\nin vec2 v_texcoord_v2;\n\n// The texture\nuniform sampler2D u_texture;\n\n// Output for fragment shader\nout vec4 outColor_v4;\n\nvoid main() {\n  outColor_v4 = texture(u_texture, v_texcoord_v2);\n}"),v=function(t,e,n){const a=t.createProgram();if(t.attachShader(a,e),t.attachShader(a,n),t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS))return a;{const e=t.getProgramInfoLog(a);throw t.deleteProgram(a),new Error("createProgram: "+e)}}(a,s,c);a.useProgram(v);const x=new l(a,a.FLOAT,v,"a_position_v4");x.setData(t,a.STATIC_DRAW);const T=new l(a,a.FLOAT,v,"a_texcoord_v2");T.setData(e,a.STATIC_DRAW);const A=a.createVertexArray();a.bindVertexArray(A);{const t=3,e=!1,n=0,a=0;x.bufferFormat(t,e,n,a)}{const t=2,e=!0,n=0,a=0;T.bufferFormat(t,e,n,a)}const R=new m(a,v,"u_matrix_m4","uniformMatrix4fv"),p=a.TRIANGLES,y=0,L=96;let b=0,B=0;const I=10.2;let F=0,w=!0,M=60;const U=a.canvas.clientWidth/a.canvas.clientHeight,D=1,S=2e3;let C=[-150,60,-380],P=[1,1,1];function f(t){if(w){const e=(t*=.001)-F;F=t,function(t,e=[0,0,0,1]){t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)}(a),b+=1.2*I*e,B+=I*e;const n=h.getXYZRotationMatrix("x",b),i=h.getXYZRotationMatrix("y",B),s=h.getPerspectiveMatrix(M,U,D,S),c=h.getTranslationMatrix(C),l=h.getScaleMatrix(P),u=r();o(u,s,c),o(u,u,n),o(u,u,i),o(u,u,l),R.setData(u),a.drawArrays(p,y,L),requestAnimationFrame(f)}}function d(t,e){C[t]=e,w=!0,requestAnimationFrame(f)}function E(t,e){P[t]=e,w=!0,requestAnimationFrame(f)}function _(t){w=t,w&&requestAnimationFrame(f)}new u(a).loadTexture("brick.jpg").then((()=>{window.requestAnimationFrame(f)}));const N=document.getElementById("fieldOfView"),X=document.getElementById("fieldOfView_output");N.step=.2,N.min=1,N.max=179,N.value=M,X.textContent=M,N.addEventListener("input",(()=>{const t=+N.value;X.textContent=N.value,M=t,w=!0,requestAnimationFrame(f)}));const G=document.getElementById("x_translate"),k=document.getElementById("y_translate"),O=document.getElementById("z_translate"),Y=document.getElementById("x_translate_output"),H=document.getElementById("y_translate_output"),q=document.getElementById("z_translate_output");G.min=-200,G.max=200,G.step=2,G.value=C[0],Y.textContent=C[0],k.min=-200,k.max=200,k.step=2,k.value=C[1],H.textContent=C[1],O.min=-1e3,O.max=0,O.step=5,O.value=C[2],q.textContent=C[2],G.addEventListener("input",(()=>{const t=+G.value;Y.textContent=t,d(0,t)})),k.addEventListener("input",(()=>{const t=+k.value;H.textContent=t,d(1,t)})),O.addEventListener("input",(()=>{const t=+O.value;q.textContent=t,d(2,t)}));const V=document.getElementById("x_scale"),W=document.getElementById("y_scale"),z=document.getElementById("z_scale"),Z=document.getElementById("x_scale_output"),$=document.getElementById("y_scale_output"),j=document.getElementById("z_scale_output");V.step=W.step=z.step=.1,V.min=W.min=z.min=-5,V.max=W.max=z.max=5,V.value=Z.textContent=P[0],W.value=$.textContent=P[1],z.value=j.textContent=P[2],V.addEventListener("input",(()=>{const t=+V.value;Z.textContent=t,E(0,t)})),W.addEventListener("input",(()=>{const t=+W.value;$.textContent=t,E(1,t)})),z.addEventListener("input",(()=>{const t=+z.value;j.textContent=t,E(2,t)}));const K=document.getElementById("startStopRotate");K.checked=!0,K.addEventListener("change",(()=>{K.checked?_(!0):_(!1)}))}catch(t){console.log(t)}
//# sourceMappingURL=index.6ce9973d.js.map
