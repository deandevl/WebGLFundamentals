const t=[0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0],e=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0];var n="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;var o=Math.PI/180;function a(t){return t*o}function r(){var t=new n(16);return n!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function i(t,e){var n=e[0],o=e[1],a=e[2],r=e[3],i=e[4],s=e[5],u=e[6],c=e[7],l=e[8],m=e[9],h=e[10],f=e[11],_=e[12],v=e[13],d=e[14],g=e[15],p=n*s-o*i,x=n*u-a*i,y=n*c-r*i,E=o*u-a*s,L=o*c-r*s,B=a*c-r*u,M=l*v-m*_,A=l*d-h*_,C=l*g-f*_,I=m*d-h*v,w=m*g-f*v,T=h*g-f*d,b=p*T-x*w+y*I+E*C-L*A+B*M;return b?(b=1/b,t[0]=(s*T-u*w+c*I)*b,t[1]=(a*w-o*T-r*I)*b,t[2]=(v*B-d*L+g*E)*b,t[3]=(h*L-m*B-f*E)*b,t[4]=(u*C-i*T-c*A)*b,t[5]=(n*T-a*C+r*A)*b,t[6]=(d*y-_*B-g*x)*b,t[7]=(l*B-h*y+f*x)*b,t[8]=(i*w-s*C+c*M)*b,t[9]=(o*C-n*w-r*M)*b,t[10]=(_*L-v*y+g*p)*b,t[11]=(m*y-l*L-f*p)*b,t[12]=(s*A-i*I-u*M)*b,t[13]=(n*I-o*A+a*M)*b,t[14]=(v*x-_*E-d*p)*b,t[15]=(l*E-m*x+h*p)*b,t):null}function s(t,e,n){var o=e[0],a=e[1],r=e[2],i=e[3],s=e[4],u=e[5],c=e[6],l=e[7],m=e[8],h=e[9],f=e[10],_=e[11],v=e[12],d=e[13],g=e[14],p=e[15],x=n[0],y=n[1],E=n[2],L=n[3];return t[0]=x*o+y*s+E*m+L*v,t[1]=x*a+y*u+E*h+L*d,t[2]=x*r+y*c+E*f+L*g,t[3]=x*i+y*l+E*_+L*p,x=n[4],y=n[5],E=n[6],L=n[7],t[4]=x*o+y*s+E*m+L*v,t[5]=x*a+y*u+E*h+L*d,t[6]=x*r+y*c+E*f+L*g,t[7]=x*i+y*l+E*_+L*p,x=n[8],y=n[9],E=n[10],L=n[11],t[8]=x*o+y*s+E*m+L*v,t[9]=x*a+y*u+E*h+L*d,t[10]=x*r+y*c+E*f+L*g,t[11]=x*i+y*l+E*_+L*p,x=n[12],y=n[13],E=n[14],L=n[15],t[12]=x*o+y*s+E*m+L*v,t[13]=x*a+y*u+E*h+L*d,t[14]=x*r+y*c+E*f+L*g,t[15]=x*i+y*l+E*_+L*p,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var u=function(t,e,n,o,a){var r,i=1/Math.tan(e/2);return t[0]=i/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=a&&a!==1/0?(r=1/(o-a),t[10]=(a+o)*r,t[14]=2*a*o*r):(t[10]=-1,t[14]=-2*o),t};var c=function(t,e,n,o,a,r,i){var s=1/(e-n),u=1/(o-a),c=1/(r-i);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+n)*s,t[13]=(a+o)*u,t[14]=(i+r)*c,t[15]=1,t};function l(t,e,n,o){var a=e[0],r=e[1],i=e[2],s=o[0],u=o[1],c=o[2],l=a-n[0],m=r-n[1],h=i-n[2],f=l*l+m*m+h*h;f>0&&(l*=f=1/Math.sqrt(f),m*=f,h*=f);var _=u*h-c*m,v=c*l-s*h,d=s*m-u*l;return(f=_*_+v*v+d*d)>0&&(_*=f=1/Math.sqrt(f),v*=f,d*=f),t[0]=_,t[1]=v,t[2]=d,t[3]=0,t[4]=m*d-h*v,t[5]=h*_-l*d,t[6]=l*v-m*_,t[7]=0,t[8]=l,t[9]=m,t[10]=h,t[11]=0,t[12]=a,t[13]=r,t[14]=i,t[15]=1,t}function m(t,e,n){const o=t.createShader(e);t.shaderSource(o,n),t.compileShader(o);if(t.getShaderParameter(o,t.COMPILE_STATUS))return o;{const e=t.getShaderInfoLog(o);throw t.deleteShader(o),new Error(`HelperFunctions-createShader-Error: ${e}`)}}class h{constructor(t,e,n,o){this.gl=t,this.buffer_type="ARRAY",this.data_type=e,this.attributeLocation=this.gl.getAttribLocation(n,o),this.arrayBuffer=this.gl.createBuffer()}bufferFormat(t,e,n,o){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),this.gl.vertexAttribPointer(this.attributeLocation,t,this.data_type,e,n,o),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(t,e){let n;if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),n=t,"number"==typeof t[0]){n=new Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}else if(Array.isArray(t)){n=new Array(t.length*t[0].length);for(let e=0;e<t.length;e++)for(let o=0;o<t[0].length;o++)n[e*t[0].length+o]=t[e][o]}switch(this.data_type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(n),e);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(n),e)}}delete(){this.gl.deleteBuffer(this.arrayBuffer)}}class f{static getOrthoMatrix(t,e,n,o,a,i){const s=r();return c(s,t,e,n,o,a,i),s}static getPerspectiveMatrix(t,e,n,o){const i=r();return u(i,a(t),e,n,o),i}static getTranslationMatrix(t){const e=r();var n,o;return o=t,(n=e)[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=o[0],n[13]=o[1],n[14]=o[2],n[15]=1,e}static getRotationMatrix(t,e){const n=r();var o,i,s,u,c,l,m,h,f,_;return o=n,i=a(t),m=(s=e)[0],h=s[1],f=s[2],!((_=Math.hypot(m,h,f))<1e-6)&&(m*=_=1/_,h*=_,f*=_,u=Math.sin(i),l=1-(c=Math.cos(i)),o[0]=m*m*l+c,o[1]=h*m*l+f*u,o[2]=f*m*l-h*u,o[3]=0,o[4]=m*h*l-f*u,o[5]=h*h*l+c,o[6]=f*h*l+m*u,o[7]=0,o[8]=m*f*l+h*u,o[9]=h*f*l-m*u,o[10]=f*f*l+c,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1),n}static getXYZRotationMatrix(t,e){const n=r();var o,i,s,u;return"x"===t?(o=n,i=a(e),s=Math.sin(i),u=Math.cos(i),o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=u,o[6]=s,o[7]=0,o[8]=0,o[9]=-s,o[10]=u,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1):"y"===t?function(t,e){var n=Math.sin(e),o=Math.cos(e);t[0]=o,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(n,a(e)):"z"===t&&function(t,e){var n=Math.sin(e),o=Math.cos(e);t[0]=o,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(n,a(e)),n}static getScaleMatrix(t){const e=r();var n,o;return o=t,(n=e)[0]=o[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=o[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=o[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,e}}class _{constructor(t,e,n,o){this.gl=t,this.data_type=o,this.data=null,this.uniformLocation=t.getUniformLocation(e,n)}setData(...t){switch(this.data_type){case"uniform1i":this.gl.uniform1i(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform1f":this.gl.uniform1f(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform2f":this.gl.uniform2f(this.uniformLocation,t[0],t[1]),this.data=[t[0],t[1]];break;case"uniform4f":this.gl.uniform4f(this.uniformLocation,t[0],t[1],t[2],t[3]),this.data=[t[0],t[1],t[2],t[3]];break;case"uniform2fv":this.gl.uniform2fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform3fv":this.gl.uniform3fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform4fv":this.gl.uniform4fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniformMatrix3fv":this.gl.uniformMatrix3fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;case"uniformMatrix4fv":this.gl.uniformMatrix4fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;default:throw new Error(`UniformClass: function ${this.type} has not been implemented.`)}}}function v(t,e){let n=[];for(let o=0;o<4;++o){n[o]=0;for(let a=0;a<4;++a)n[o]+=t[a]*e[4*a+o]}return n}try{const n=function(t,e="webgl2",n){const o=document.getElementById(t);if(!o)throw new Error(`HelperFunctions-createGLContext-Error: Could not locate canvas element with id ${t}`);return{gl:o.getContext(e,n),canvas:o}}("my_canvas"),o=n.gl,u=n.canvas;o.enable(o.DEPTH_TEST),o.enable(o.CULL_FACE),o.depthFunc(o.LEQUAL),function(t){const e=t.clientWidth,n=t.clientHeight,o=t.width!==e||t.height!==n;o&&(t.width=e,t.height=n)}(u),o.viewport(0,0,o.canvas.width,o.canvas.height);const c=m(o,o.VERTEX_SHADER,"#version 300 es\n\nin vec4 a_position_v4;\nin vec3 a_normal_v3;\n\nuniform vec3 u_lightPosition_v3;       // position light vector\n\nuniform mat4 u_trs_m4;                    // translate/rotate/scale matrix of target\nuniform mat4 u_trsViewPerspective_m4;     // u_trs_m4 * view_m4 * perspective_m4\nuniform mat4 u_trsInverseTranspose_m4;    // transpose(inverse(u_trs_m4))\n\nout vec3 v_normal_v3;\nout vec3 v_surfaceToLight_v3;\n\nvoid main() {\n  // Multiply the position by the u_trs_m4 * view_m4 * perspective_m4 matrices\n  gl_Position = u_trsViewPerspective_m4 * a_position_v4;\n\n  // Orient the normals and pass to the fragment shader\n  v_normal_v3 = mat3(u_trsInverseTranspose_m4) * a_normal_v3;\n\n  // Compute the u_trs_m4 position of the surface\n  vec3 surfaceTrsPosition_v3 = (u_trs_m4 * a_position_v4).xyz;\n\n  // Compute the vector of the surface to the light\n  //   and pass it to the fragment shader\n  v_surfaceToLight_v3 = u_lightPosition_v3 - surfaceTrsPosition_v3;\n}"),E=m(o,o.FRAGMENT_SHADER,"#version 300 es\n\nprecision highp float;\n\n// Passed in from the vertex shader\nin vec3 v_normal_v3;\nin vec3 v_surfaceToLight_v3;\nout vec4 outColor_v4;\n\nuniform vec4 u_color_v4;\nuniform vec3 u_lightDirection_v3;\nuniform float u_lightLimit_f;\n\nvoid main() {\n  // Because v_normal is a varying it's interpolated,\n  //   so it will not be a unit vector.  Normalizing\n  //   it will make it a unit vector again.\n  vec3 normal_v3 = normalize(v_normal_v3);\n\n  vec3 surfaceToLightDirection_v3 = normalize(v_surfaceToLight_v3);\n\n  float light_f = 0.0;\n  float dotFromDirection = 1.0;\n  float dotFromDirection_f = dot(surfaceToLightDirection_v3, -u_lightDirection_v3);\n  if(dotFromDirection >= u_lightLimit_f){\n    light_f = dot(normal_v3, surfaceToLightDirection_v3);\n  }\n\n  outColor_v4 = u_color_v4;\n\n  // Lets multiply just the color portion (not the alpha)\n  //   by the light.\n  outColor_v4.rgb *= light_f;\n}"),L=function(t,e,n){const o=t.createProgram();if(t.attachShader(o,e),t.attachShader(o,n),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS))return o;{const e=t.getProgramInfoLog(o);throw t.deleteProgram(o),new Error(`HelperFunctions-createProgram-Error: ${e}`)}}(o,c,E);o.useProgram(L);const B=o.FLOAT,M=new h(o,B,L,"a_position_v4"),A=f.getXYZRotationMatrix("x",180);s(A,A,f.getTranslationMatrix([-50,-75,-15]));for(let e=0;e<t.length;e+=3){const n=v([t[e],t[e+1],t[e+2],1],A);t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2]}M.setData(t,o.STATIC_DRAW);const C=o.FLOAT,I=new h(o,C,L,"a_normal_v3");I.setData(e,o.STATIC_DRAW);const w=o.createVertexArray();o.bindVertexArray(w);{const t=3,e=!1,n=0,o=0;M.bufferFormat(t,e,n,o)}{const t=3,e=!1,n=0,o=0;I.bufferFormat(t,e,n,o)}const T=new _(o,L,"u_trs_m4","uniformMatrix4fv"),b=new _(o,L,"u_trsViewPerspective_m4","uniformMatrix4fv"),D=new _(o,L,"u_trsInverseTranspose_m4","uniformMatrix4fv"),F=new _(o,L,"u_lightPosition_v3","uniform3fv"),R=[40,60,120];F.setData(R);new _(o,L,"u_color_v4","uniform4fv").setData([.2,1,.2,1]);const P=new _(o,L,"u_lightDirection_v3","uniform3fv");P.setData([0,0,1]);const S=new _(o,L,"u_lightLimit_f","uniform1f");let U=10;S.setData(a(U));const Y=[0,0,200],k=[0,35,0],z=[0,1,0],H=r();l(H,Y,k,z);const O=r();i(O,H);const V=o.TRIANGLES,X=0,Z=96;let N=[0,0,0],G=[0,0,0],W=[1,1,1],$=100;const q=o.canvas.clientWidth/o.canvas.clientHeight,Q=1,j=2e3;let K=[0,0];function d(){!function(t,e=[.9,.9,.9,1]){t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL)}(o,[1,1,0,.5]);const t=f.getTranslationMatrix(N),e=f.getXYZRotationMatrix("x",G[0]),n=f.getXYZRotationMatrix("y",G[1]),u=f.getXYZRotationMatrix("z",G[2]),c=f.getScaleMatrix(W),m=r();s(m,t,e),s(m,m,n),s(m,m,u),s(m,m,c),T.setData(m);const h=f.getPerspectiveMatrix($,q,Q,j),_=r();s(_,h,O);const v=r();s(v,_,m),b.setData(v);const d=r();i(d,m);const g=r();!function(t,e){if(t===e){var n=e[1],o=e[2],a=e[3],r=e[6],i=e[7],s=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=n,t[6]=e[9],t[7]=e[13],t[8]=o,t[9]=r,t[11]=e[14],t[12]=a,t[13]=i,t[14]=s}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15]}(g,d),D.setData(g);const p=r();l(p,R,k,z);const x=f.getXYZRotationMatrix("x",K[0]),y=f.getXYZRotationMatrix("y",K[1]);s(p,p,x),s(p,p,y),P.setData([-p[8],-p[9],-p[10]]),S.setData(Math.cos(a(U))),o.drawArrays(V,X,Z)}function g(t,e){N[t]=e,d()}function p(t,e){G[t]=e,d()}function x(t,e){W[t]=e,d()}function y(t,e){K[t]=e,d()}const J=document.getElementById("fieldOfView"),tt=document.getElementById("fieldOfView_output");J.step=.2,J.min=1,J.max=179,J.value=$,tt.textContent=$,J.addEventListener("input",(()=>{const t=+J.value;tt.textContent=J.value,$=t,d()}));const et=document.getElementById("x_translate"),nt=document.getElementById("y_translate"),ot=document.getElementById("z_translate"),at=document.getElementById("x_translate_output"),rt=document.getElementById("y_translate_output"),it=document.getElementById("z_translate_output");et.min=-200,et.max=200,et.step=2,et.value=N[0],at.textContent=N[0],nt.min=-200,nt.max=200,nt.step=2,nt.value=N[1],rt.textContent=N[1],ot.min=-1e3,ot.max=0,ot.step=5,ot.value=N[2],it.textContent=N[2],et.addEventListener("input",(()=>{const t=+et.value;at.textContent=t,g(0,t)})),nt.addEventListener("input",(()=>{const t=+nt.value;rt.textContent=t,g(1,t)})),ot.addEventListener("input",(()=>{const t=+ot.value;it.textContent=t,g(2,t)}));const st=document.getElementById("x_rotate"),ut=document.getElementById("y_rotate"),ct=document.getElementById("z_rotate"),lt=document.getElementById("x_rotate_output"),mt=document.getElementById("y_rotate_output"),ht=document.getElementById("z_rotate_output");st.step=ut.step=ct.step=5,st.min=ut.min=ct.min=0,st.max=ut.max=ct.max=360,st.value=lt.textContent=G[0],ut.value=mt.textContent=G[1],ct.value=ht.textContent=G[2],st.addEventListener("input",(()=>{const t=+st.value;lt.textContent=t,p(0,t)})),ut.addEventListener("input",(()=>{const t=+ut.value;mt.textContent=t,p(1,t)})),ct.addEventListener("input",(()=>{const t=+ct.value;ht.textContent=t,p(2,t)}));const ft=document.getElementById("x_scale"),_t=document.getElementById("y_scale"),vt=document.getElementById("z_scale"),dt=document.getElementById("x_scale_output"),gt=document.getElementById("y_scale_output"),pt=document.getElementById("z_scale_output");ft.step=_t.step=vt.step=.1,ft.min=_t.min=vt.min=-5,ft.max=_t.max=vt.max=5,ft.value=dt.textContent=W[0],_t.value=gt.textContent=W[1],vt.value=pt.textContent=W[2],ft.addEventListener("input",(()=>{const t=+ft.value;dt.textContent=t,x(0,t)})),_t.addEventListener("input",(()=>{const t=+_t.value;gt.textContent=t,x(1,t)})),vt.addEventListener("input",(()=>{const t=+vt.value;pt.textContent=t,x(2,t)}));const xt=document.getElementById("x_light_rotate"),yt=document.getElementById("y_light_rotate"),Et=document.getElementById("x_light_rotate_output"),Lt=document.getElementById("y_light_rotate_output");xt.value=Et.textContent=K[0],yt.value=Lt.textContent=K[1],xt.step=yt.step=.1,xt.min=yt.min=-2,xt.max=yt.max=2,xt.addEventListener("input",(()=>{const t=+xt.value;Et.textContent=t,y(0,t)})),yt.addEventListener("input",(()=>{const t=+yt.value;Lt.textContent=t,y(1,t)}));const Bt=document.getElementById("light_limit"),Mt=document.getElementById("light_limit_output");Bt.value=Mt.textContent=U,Bt.step=.2,Bt.min=0,Bt.max=180,Bt.addEventListener("input",(()=>{const t=+Bt.value;Mt.textContent=t,U=t,d()})),d()}catch(t){console.log(t)}
//# sourceMappingURL=index.0df88130.js.map