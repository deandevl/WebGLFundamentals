const t=[-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5],e=[0,0,0,.5,.25,0,0,.5,.25,.5,.25,0,.25,0,.5,0,.25,.5,.25,.5,.5,0,.5,.5,.5,0,.5,.5,.75,0,.5,.5,.75,.5,.75,0,0,.5,.25,.5,0,1,0,1,.25,.5,.25,1,.25,.5,.25,1,.5,.5,.25,1,.5,1,.5,.5,.5,.5,.75,.5,.5,1,.5,1,.75,.5,.75,1];var r="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;var i=Math.PI/180;function n(t){return t*i}function a(){var t=new r(16);return r!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function o(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=e[4],h=e[5],c=e[6],l=e[7],u=e[8],g=e[9],f=e[10],m=e[11],_=e[12],E=e[13],v=e[14],T=e[15],A=r[0],R=r[1],d=r[2],x=r[3];return t[0]=A*i+R*s+d*u+x*_,t[1]=A*n+R*h+d*g+x*E,t[2]=A*a+R*c+d*f+x*v,t[3]=A*o+R*l+d*m+x*T,A=r[4],R=r[5],d=r[6],x=r[7],t[4]=A*i+R*s+d*u+x*_,t[5]=A*n+R*h+d*g+x*E,t[6]=A*a+R*c+d*f+x*v,t[7]=A*o+R*l+d*m+x*T,A=r[8],R=r[9],d=r[10],x=r[11],t[8]=A*i+R*s+d*u+x*_,t[9]=A*n+R*h+d*g+x*E,t[10]=A*a+R*c+d*f+x*v,t[11]=A*o+R*l+d*m+x*T,A=r[12],R=r[13],d=r[14],x=r[15],t[12]=A*i+R*s+d*u+x*_,t[13]=A*n+R*h+d*g+x*E,t[14]=A*a+R*c+d*f+x*v,t[15]=A*o+R*l+d*m+x*T,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var s=function(t,e,r,i,n){var a,o=1/Math.tan(e/2);return t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=n&&n!==1/0?(a=1/(i-n),t[10]=(n+i)*a,t[14]=2*n*i*a):(t[10]=-1,t[14]=-2*i),t};var h=function(t,e,r,i,n,a,o){var s=1/(e-r),h=1/(i-n),c=1/(a-o);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+r)*s,t[13]=(n+i)*h,t[14]=(o+a)*c,t[15]=1,t};var c,l,u,g,f,m,_,E,v,T,A,R,d,x,b,L,M,U,D,w,F,S,y,P,p,B,I,N,X,C,G;class Y{constructor(t,e,r,i){this.gl=t,this.type=e,this.attributeLocation=this.gl.getAttribLocation(r,i),this.buffer=this.gl.createBuffer()}bufferFormat(t,e,r,i){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer),this.gl.vertexAttribPointer(this.attributeLocation,t,this.type,e,r,i),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(t,e){switch(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer),this.type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),e);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(t),e)}}}class k{constructor(t){this.gl=t}setColor(t){const e=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array(t))}async loadTexture(t){this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array([0,0,255,255]));let e=await fetch(t),r=await e.blob(),i=await createImageBitmap(r,{imageOrientation:"flipY"});const n=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,n),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,i)}}class O{static getOrthoMatrix(t,e,r,i,n,o){const s=a();return h(s,t,e,r,i,n,o),s}static getPerspectiveMatrix(t,e,r,i){const o=a();return s(o,n(t),e,r,i),o}static getTranslationMatrix(t){const e=a();var r,i;return i=t,(r=e)[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=i[0],r[13]=i[1],r[14]=i[2],r[15]=1,e}static getXYZRotationMatrix(t,e){const r=a();var i,o,s,h;return"x"===t?(i=r,o=n(e),s=Math.sin(o),h=Math.cos(o),i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=h,i[6]=s,i[7]=0,i[8]=0,i[9]=-s,i[10]=h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1):"y"===t?function(t,e){var r=Math.sin(e),i=Math.cos(e);t[0]=i,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(r,n(e)):"z"===t&&function(t,e){var r=Math.sin(e),i=Math.cos(e);t[0]=i,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(r,n(e)),r}static getScaleMatrix(t){const e=a();var r,i;return i=t,(r=e)[0]=i[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=i[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=i[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,e}}class H{constructor(t,e,r,i){this.gl=t,this.type=i,this.uniformLocation=t.getUniformLocation(e,r)}setData(...t){switch(this.type){case"uniform1f":this.gl.uniform1f(this.uniformLocation,t[0]);break;case"uniform2f":this.gl.uniform2f(this.uniformLocation,t[0],t[1]);break;case"uniform4f":this.gl.uniform4f(this.uniformLocation,t[0],t[1],t[2],t[3]);break;case"uniform2fv":this.gl.uniform2fv(this.uniformLocation,t[0]);break;case"uniform3fv":this.gl.uniform3fv(this.uniformLocation,t[0]);break;case"uniform4fv":this.gl.uniform4fv(this.uniformLocation,t[0]);break;case"uniformMatrix3fv":this.gl.uniformMatrix3fv(this.uniformLocation,!1,t[0]);break;case"uniformMatrix4fv":this.gl.uniformMatrix4fv(this.uniformLocation,!1,t[0]);break;default:throw new Error(`UniformClass: function ${this.type} has not been implemented.`)}}}function W(t,e,r){const i=t.createShader(e);t.shaderSource(i,r),t.compileShader(i);if(t.getShaderParameter(i,t.COMPILE_STATUS))return i;{const e=t.getShaderInfoLog(i);throw t.deleteShader(i),new Error("createShader: "+e)}}try{const r=function(t,e="webgl2",r){const i=document.getElementById(t);if(!i)throw new Error(`createGLContext: Could not locate canvas element with id ${t}`);return{gl:i.getContext(e,r),canvas:i}}("my_canvas"),i=r.gl,n=r.canvas;i.enable(i.DEPTH_TEST),i.enable(i.CULL_FACE),i.depthFunc(i.LEQUAL),function(t){const e=t.clientWidth,r=t.clientHeight,i=t.width!==e||t.height!==r;i&&(t.width=e,t.height=r)}(n),i.viewport(0,0,i.canvas.width,i.canvas.height);const s=W(i,i.VERTEX_SHADER,"#version 300 es\n\nin vec4 a_position_v4;\nin vec2 a_texcoord_v2;\n\nuniform mat4 u_matrix_m4;\n\nout vec2 v_texcoord_v2;\n\nvoid main() {\n  // Multiply the position by the matrix\n  gl_Position = u_matrix_m4 * a_position_v4;\n\n  // Pass the texcoord to the fragment shader\n  v_texcoord_v2 = a_texcoord_v2;\n}"),h=W(i,i.FRAGMENT_SHADER,"#version 300 es\n\nprecision highp float;\n\n// Passed in from the vertex shader\nin vec2 v_texcoord_v2;\n\n// The texture\nuniform sampler2D u_texture;\n\n// Output for fragment shader\nout vec4 outColor_v4;\n\nvoid main() {\n  outColor_v4 = texture(u_texture, v_texcoord_v2);\n}"),V=function(t,e,r){const i=t.createProgram();if(t.attachShader(i,e),t.attachShader(i,r),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS))return i;{const e=t.getProgramInfoLog(i);throw t.deleteProgram(i),new Error("createProgram: "+e)}}(i,s,h);i.useProgram(V);const Z=i.FLOAT,$=new Y(i,Z,V,"a_position_v4");$.setData(t,i.STATIC_DRAW);const j=i.FLOAT,z=new Y(i,j,V,"a_texcoord_v2");z.setData(e,i.STATIC_DRAW);const K=i.createVertexArray();i.bindVertexArray(K);{const t=3,e=!1,r=0,i=0;$.bufferFormat(t,e,r,i)}{const t=2,e=!0,r=0,i=0;z.bufferFormat(t,e,r,i)}const Q=new H(i,V,"u_matrix_m4","uniformMatrix4fv"),J=i.TRIANGLES,tt=0,et=36;let rt=0,it=0;const nt=10.2;let at=0;const ot=60,st=i.canvas.clientWidth/i.canvas.clientHeight,ht=1,ct=2e3,lt=O.getPerspectiveMatrix(ot,st,ht,ct),ut=[0,0,2],gt=[0,1,0],ft=[0,0,0],mt=a();!function(t,e,r,i){var n=e[0],a=e[1],o=e[2],s=i[0],h=i[1],c=i[2],l=n-r[0],u=a-r[1],g=o-r[2],f=l*l+u*u+g*g;f>0&&(l*=f=1/Math.sqrt(f),u*=f,g*=f);var m=h*g-c*u,_=c*l-s*g,E=s*u-h*l;(f=m*m+_*_+E*E)>0&&(m*=f=1/Math.sqrt(f),_*=f,E*=f),t[0]=m,t[1]=_,t[2]=E,t[3]=0,t[4]=u*E-g*_,t[5]=g*m-l*E,t[6]=l*_-u*m,t[7]=0,t[8]=l,t[9]=u,t[10]=g,t[11]=0,t[12]=n,t[13]=a,t[14]=o,t[15]=1}(mt,ut,ft,gt);const _t=a();c=_t,u=(l=mt)[0],g=l[1],f=l[2],m=l[3],_=l[4],E=l[5],v=l[6],T=l[7],A=l[8],R=l[9],d=l[10],x=l[11],b=l[12],L=l[13],M=l[14],U=l[15],(G=(D=u*E-g*_)*(C=d*U-x*M)-(w=u*v-f*_)*(X=R*U-x*L)+(F=u*T-m*_)*(N=R*M-d*L)+(S=g*v-f*E)*(I=A*U-x*b)-(y=g*T-m*E)*(B=A*M-d*b)+(P=f*T-m*v)*(p=A*L-R*b))&&(G=1/G,c[0]=(E*C-v*X+T*N)*G,c[1]=(f*X-g*C-m*N)*G,c[2]=(L*P-M*y+U*S)*G,c[3]=(d*y-R*P-x*S)*G,c[4]=(v*I-_*C-T*B)*G,c[5]=(u*C-f*I+m*B)*G,c[6]=(M*F-b*P-U*w)*G,c[7]=(A*P-d*F+x*w)*G,c[8]=(_*X-E*I+T*p)*G,c[9]=(g*I-u*X-m*p)*G,c[10]=(b*y-L*F+U*D)*G,c[11]=(R*F-A*y-x*D)*G,c[12]=(E*B-_*N-v*p)*G,c[13]=(u*N-g*B+f*p)*G,c[14]=(L*w-b*S-M*D)*G,c[15]=(A*S-R*w+d*D)*G);const Et=a();o(Et,lt,_t);function q(t){const e=(t*=.001)-at;at=t,function(t,e=[0,0,0,1]){t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)}(i),rt+=1.2*nt*e,it+=nt*e;const r=O.getXYZRotationMatrix("x",rt),n=O.getXYZRotationMatrix("y",it),s=a();o(s,Et,r),o(s,s,n),Q.setData(s),i.drawArrays(J,tt,et),requestAnimationFrame(q)}new k(i).loadTexture("noodles.jpg").then((()=>{window.requestAnimationFrame(q)}))}catch(t){console.log(t)}
//# sourceMappingURL=index.b9259049.js.map
