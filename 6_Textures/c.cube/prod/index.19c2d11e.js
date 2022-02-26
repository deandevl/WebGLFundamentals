const t=[-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5],e=[0,0,0,.5,.25,0,0,.5,.25,.5,.25,0,.25,0,.5,0,.25,.5,.25,.5,.5,0,.5,.5,.5,0,.5,.5,.75,0,.5,.5,.75,.5,.75,0,0,.5,.25,.5,0,1,0,1,.25,.5,.25,1,.25,.5,.25,1,.5,.5,.25,1,.5,1,.5,.5,.5,.5,.75,.5,.5,1,.5,1,.75,.5,.75,1];var r="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;var a=Math.PI/180;function i(t){return t*a}function n(){var t=new r(16);return r!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function o(t,e,r){var a=e[0],i=e[1],n=e[2],o=e[3],s=e[4],h=e[5],c=e[6],l=e[7],u=e[8],g=e[9],f=e[10],m=e[11],_=e[12],E=e[13],d=e[14],T=e[15],v=r[0],A=r[1],R=r[2],x=r[3];return t[0]=v*a+A*s+R*u+x*_,t[1]=v*i+A*h+R*g+x*E,t[2]=v*n+A*c+R*f+x*d,t[3]=v*o+A*l+R*m+x*T,v=r[4],A=r[5],R=r[6],x=r[7],t[4]=v*a+A*s+R*u+x*_,t[5]=v*i+A*h+R*g+x*E,t[6]=v*n+A*c+R*f+x*d,t[7]=v*o+A*l+R*m+x*T,v=r[8],A=r[9],R=r[10],x=r[11],t[8]=v*a+A*s+R*u+x*_,t[9]=v*i+A*h+R*g+x*E,t[10]=v*n+A*c+R*f+x*d,t[11]=v*o+A*l+R*m+x*T,v=r[12],A=r[13],R=r[14],x=r[15],t[12]=v*a+A*s+R*u+x*_,t[13]=v*i+A*h+R*g+x*E,t[14]=v*n+A*c+R*f+x*d,t[15]=v*o+A*l+R*m+x*T,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var s=function(t,e,r,a,i){var n,o=1/Math.tan(e/2);return t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(n=1/(a-i),t[10]=(i+a)*n,t[14]=2*i*a*n):(t[10]=-1,t[14]=-2*a),t};var h=function(t,e,r,a,i,n,o){var s=1/(e-r),h=1/(a-i),c=1/(n-o);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+r)*s,t[13]=(i+a)*h,t[14]=(o+n)*c,t[15]=1,t};var c,l,u,g,f,m,_,E,d,T,v,A,R,x,y,b,M,p,w,F,L,U,D,B,P,S,I,X,C,G,N;function Y(t,e,r){const a=t.createShader(e);t.shaderSource(a,r),t.compileShader(a);if(t.getShaderParameter(a,t.COMPILE_STATUS))return a;{const e=t.getShaderInfoLog(a);throw t.deleteShader(a),new Error(`HelperFunctions-createShader-Error: ${e}`)}}class k{constructor(t,e,r,a){this.gl=t,this.buffer_type="ARRAY",this.data_type=e,this.attributeLocation=this.gl.getAttribLocation(r,a),this.arrayBuffer=this.gl.createBuffer()}bufferFormat(t,e,r,a){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),this.gl.vertexAttribPointer(this.attributeLocation,t,this.data_type,e,r,a),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(t,e){let r;if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),r=t,"number"==typeof t[0]){r=new Array(t.length);for(let e=0;e<t.length;e++)r[e]=t[e]}else if(Array.isArray(t)){r=new Array(t.length*t[0].length);for(let e=0;e<t.length;e++)for(let a=0;a<t[0].length;a++)r[e*t[0].length+a]=t[e][a]}switch(this.data_type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),e);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(r),e)}}delete(){this.gl.deleteBuffer(this.arrayBuffer)}}class H{constructor(t){this.gl=t}setColor(t){const e=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array(t))}async loadTexture(t){this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array([0,0,255,255]));let e=await fetch(t),r=await e.blob(),a=await createImageBitmap(r,{imageOrientation:"flipY"});const i=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,a)}}class O{static getOrthoMatrix(t,e,r,a,i,o){const s=n();return h(s,t,e,r,a,i,o),s}static getPerspectiveMatrix(t,e,r,a){const o=n();return s(o,i(t),e,r,a),o}static getTranslationMatrix(t){const e=n();var r,a;return a=t,(r=e)[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=a[0],r[13]=a[1],r[14]=a[2],r[15]=1,e}static getRotationMatrix(t,e){const r=n();var a,o,s,h,c,l,u,g,f,m;return a=r,o=i(t),u=(s=e)[0],g=s[1],f=s[2],!((m=Math.hypot(u,g,f))<1e-6)&&(u*=m=1/m,g*=m,f*=m,h=Math.sin(o),l=1-(c=Math.cos(o)),a[0]=u*u*l+c,a[1]=g*u*l+f*h,a[2]=f*u*l-g*h,a[3]=0,a[4]=u*g*l-f*h,a[5]=g*g*l+c,a[6]=f*g*l+u*h,a[7]=0,a[8]=u*f*l+g*h,a[9]=g*f*l-u*h,a[10]=f*f*l+c,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1),r}static getXYZRotationMatrix(t,e){const r=n();var a,o,s,h;return"x"===t?(a=r,o=i(e),s=Math.sin(o),h=Math.cos(o),a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=h,a[6]=s,a[7]=0,a[8]=0,a[9]=-s,a[10]=h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1):"y"===t?function(t,e){var r=Math.sin(e),a=Math.cos(e);t[0]=a,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(r,i(e)):"z"===t&&function(t,e){var r=Math.sin(e),a=Math.cos(e);t[0]=a,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(r,i(e)),r}static getScaleMatrix(t){const e=n();var r,a;return a=t,(r=e)[0]=a[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=a[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=a[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,e}}class W{constructor(t,e,r,a){this.gl=t,this.data_type=a,this.data=null,this.uniformLocation=t.getUniformLocation(e,r)}setData(...t){switch(this.data_type){case"uniform1i":this.gl.uniform1i(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform1f":this.gl.uniform1f(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform2f":this.gl.uniform2f(this.uniformLocation,t[0],t[1]),this.data=[t[0],t[1]];break;case"uniform4f":this.gl.uniform4f(this.uniformLocation,t[0],t[1],t[2],t[3]),this.data=[t[0],t[1],t[2],t[3]];break;case"uniform2fv":this.gl.uniform2fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform3fv":this.gl.uniform3fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform4fv":this.gl.uniform4fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniformMatrix3fv":this.gl.uniformMatrix3fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;case"uniformMatrix4fv":this.gl.uniformMatrix4fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;default:throw new Error(`UniformClass: function ${this.type} has not been implemented.`)}}}try{const r=function(t,e="webgl2",r){const a=document.getElementById(t);if(!a)throw new Error(`HelperFunctions-createGLContext-Error: Could not locate canvas element with id ${t}`);return{gl:a.getContext(e,r),canvas:a}}("my_canvas"),a=r.gl,i=r.canvas;a.enable(a.DEPTH_TEST),a.enable(a.CULL_FACE),a.depthFunc(a.LEQUAL),function(t){const e=t.clientWidth,r=t.clientHeight,a=t.width!==e||t.height!==r;a&&(t.width=e,t.height=r)}(i),a.viewport(0,0,a.canvas.width,a.canvas.height);const s=Y(a,a.VERTEX_SHADER,"#version 300 es\n\nin vec4 a_position_v4;\nin vec2 a_texcoord_v2;\n\nuniform mat4 u_matrix_m4;\n\nout vec2 v_texcoord_v2;\n\nvoid main() {\n  // Multiply the position by the matrix\n  gl_Position = u_matrix_m4 * a_position_v4;\n\n  // Pass the texcoord to the fragment shader\n  v_texcoord_v2 = a_texcoord_v2;\n}"),h=Y(a,a.FRAGMENT_SHADER,"#version 300 es\n\nprecision highp float;\n\n// Passed in from the vertex shader\nin vec2 v_texcoord_v2;\n\n// The texture\nuniform sampler2D u_texture;\n\n// Output for fragment shader\nout vec4 outColor_v4;\n\nvoid main() {\n  outColor_v4 = texture(u_texture, v_texcoord_v2);\n}"),V=function(t,e,r){const a=t.createProgram();if(t.attachShader(a,e),t.attachShader(a,r),t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS))return a;{const e=t.getProgramInfoLog(a);throw t.deleteProgram(a),new Error(`HelperFunctions-createProgram-Error: ${e}`)}}(a,s,h);a.useProgram(V);const $=a.FLOAT,Z=new k(a,$,V,"a_position_v4");Z.setData(t,a.STATIC_DRAW);const Q=a.FLOAT,j=new k(a,Q,V,"a_texcoord_v2");j.setData(e,a.STATIC_DRAW);const z=a.createVertexArray();a.bindVertexArray(z);{const t=3,e=!1,r=0,a=0;Z.bufferFormat(t,e,r,a)}{const t=2,e=!0,r=0,a=0;j.bufferFormat(t,e,r,a)}const K=new W(a,V,"u_matrix_m4","uniformMatrix4fv"),J=a.TRIANGLES,tt=0,et=36;let rt=0,at=0;const it=10.2;let nt=0;const ot=60,st=a.canvas.clientWidth/a.canvas.clientHeight,ht=1,ct=2e3,lt=O.getPerspectiveMatrix(ot,st,ht,ct),ut=[0,0,2],gt=[0,1,0],ft=[0,0,0],mt=n();!function(t,e,r,a){var i=e[0],n=e[1],o=e[2],s=a[0],h=a[1],c=a[2],l=i-r[0],u=n-r[1],g=o-r[2],f=l*l+u*u+g*g;f>0&&(l*=f=1/Math.sqrt(f),u*=f,g*=f);var m=h*g-c*u,_=c*l-s*g,E=s*u-h*l;(f=m*m+_*_+E*E)>0&&(m*=f=1/Math.sqrt(f),_*=f,E*=f),t[0]=m,t[1]=_,t[2]=E,t[3]=0,t[4]=u*E-g*_,t[5]=g*m-l*E,t[6]=l*_-u*m,t[7]=0,t[8]=l,t[9]=u,t[10]=g,t[11]=0,t[12]=i,t[13]=n,t[14]=o,t[15]=1}(mt,ut,ft,gt);const _t=n();c=_t,u=(l=mt)[0],g=l[1],f=l[2],m=l[3],_=l[4],E=l[5],d=l[6],T=l[7],v=l[8],A=l[9],R=l[10],x=l[11],y=l[12],b=l[13],M=l[14],p=l[15],(N=(w=u*E-g*_)*(G=R*p-x*M)-(F=u*d-f*_)*(C=A*p-x*b)+(L=u*T-m*_)*(X=A*M-R*b)+(U=g*d-f*E)*(I=v*p-x*y)-(D=g*T-m*E)*(S=v*M-R*y)+(B=f*T-m*d)*(P=v*b-A*y))&&(N=1/N,c[0]=(E*G-d*C+T*X)*N,c[1]=(f*C-g*G-m*X)*N,c[2]=(b*B-M*D+p*U)*N,c[3]=(R*D-A*B-x*U)*N,c[4]=(d*I-_*G-T*S)*N,c[5]=(u*G-f*I+m*S)*N,c[6]=(M*L-y*B-p*F)*N,c[7]=(v*B-R*L+x*F)*N,c[8]=(_*C-E*I+T*P)*N,c[9]=(g*I-u*C-m*P)*N,c[10]=(y*D-b*L+p*w)*N,c[11]=(A*L-v*D-x*w)*N,c[12]=(E*S-_*X-d*P)*N,c[13]=(u*X-g*S+f*P)*N,c[14]=(b*F-y*U-M*w)*N,c[15]=(v*U-A*F+R*w)*N);const Et=n();o(Et,lt,_t);function q(t){const e=(t*=.001)-nt;nt=t,function(t,e=[.9,.9,.9,1]){t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL)}(a),rt+=1.2*it*e,at+=it*e;const r=O.getXYZRotationMatrix("x",rt),i=O.getXYZRotationMatrix("y",at),s=n();o(s,Et,r),o(s,s,i),K.setData(s),a.drawArrays(J,tt,et),requestAnimationFrame(q)}new H(a).loadTexture("noodles.jpg").then((()=>{window.requestAnimationFrame(q)}))}catch(t){console.log(t)}
//# sourceMappingURL=index.19c2d11e.js.map