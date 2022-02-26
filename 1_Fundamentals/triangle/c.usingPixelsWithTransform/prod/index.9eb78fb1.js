var t="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;Math.PI;Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});function e(t,e,r){const n=t.createShader(e);t.shaderSource(n,r),t.compileShader(n);if(t.getShaderParameter(n,t.COMPILE_STATUS))return n;{const e=t.getShaderInfoLog(n);throw t.deleteShader(n),new Error(`HelperFunctions-createShader-Error: ${e}`)}}class r{constructor(t,e,r,n){this.gl=t,this.buffer_type="ARRAY",this.data_type=e,this.attributeLocation=this.gl.getAttribLocation(r,n),this.arrayBuffer=this.gl.createBuffer()}bufferFormat(t,e,r,n){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),this.gl.vertexAttribPointer(this.attributeLocation,t,this.data_type,e,r,n),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(t,e){let r;if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),r=t,"number"==typeof t[0]){r=new Array(t.length);for(let e=0;e<t.length;e++)r[e]=t[e]}else if(Array.isArray(t)){r=new Array(t.length*t[0].length);for(let e=0;e<t.length;e++)for(let n=0;n<t[0].length;n++)r[e*t[0].length+n]=t[e][n]}switch(this.data_type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),e);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(r),e)}}delete(){this.gl.deleteBuffer(this.arrayBuffer)}}class n{constructor(t,e,r,n){this.gl=t,this.data_type=n,this.data=null,this.uniformLocation=t.getUniformLocation(e,r)}setData(...t){switch(this.data_type){case"uniform1i":this.gl.uniform1i(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform1f":this.gl.uniform1f(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform2f":this.gl.uniform2f(this.uniformLocation,t[0],t[1]),this.data=[t[0],t[1]];break;case"uniform4f":this.gl.uniform4f(this.uniformLocation,t[0],t[1],t[2],t[3]),this.data=[t[0],t[1],t[2],t[3]];break;case"uniform2fv":this.gl.uniform2fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform3fv":this.gl.uniform3fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform4fv":this.gl.uniform4fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniformMatrix3fv":this.gl.uniformMatrix3fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;case"uniformMatrix4fv":this.gl.uniformMatrix4fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;default:throw new Error(`UniformClass: function ${this.type} has not been implemented.`)}}}try{const s=function(t,e="webgl2",r){const n=document.getElementById(t);if(!n)throw new Error(`HelperFunctions-createGLContext-Error: Could not locate canvas element with id ${t}`);return{gl:n.getContext(e,r),canvas:n}}("my_canvas"),h=s.gl;!function(t){const e=t.clientWidth,r=t.clientHeight,n=t.width!==e||t.height!==r;n&&(t.width=e,t.height=r)}(s.canvas),h.viewport(0,0,h.canvas.width,h.canvas.height);const c=e(h,h.VERTEX_SHADER,"#version 300 es\n\nin vec2 a_position_v2;\n\nuniform mat3 u_transform_m3;\n\nvoid main() {\n  // Multiply the position by the transform matrix\n  gl_Position = vec4((u_transform_m3 * vec3(a_position_v2, 1)).xy, 0, 1);\n}"),f=e(h,h.FRAGMENT_SHADER,'#version 300 es\n\n// Fragment shaders don\'t have a default precision so we need\n//   to pick one. highp is a good default. It means "high precision"\n\nprecision highp float;\n\n// We need to declare an output for the fragment shader\nout vec4 outColor_v4;\n\nvoid main() {\n  // outColor variable is responsible for setting (red, green, blue)\n  outColor_v4 = vec4(1, 0, 0.5, 1); // return reddish-purple\n}'),l=function(t,e,r){const n=t.createProgram();if(t.attachShader(n,e),t.attachShader(n,r),t.linkProgram(n),t.getProgramParameter(n,t.LINK_STATUS))return n;{const e=t.getProgramInfoLog(n);throw t.deleteProgram(n),new Error(`HelperFunctions-createProgram-Error: ${e}`)}}(h,c,f);h.useProgram(l);const u=[0,300,300,0,0,0],g=[0,600,600,0,0,0],d=[150,450,450,150,150,150];let m=u;const v=h.FLOAT,A=new r(h,v,l,"a_position_v2");A.setData(m,h.STATIC_DRAW);const y=h.createVertexArray();h.bindVertexArray(y);{const t=2,e=!1,r=0,n=0;A.bufferFormat(t,e,r,n)}const _=new n(h,l,"u_transform_m3","uniformMatrix3fv");function a(e,r){return n=2/e,a=0,i=0,o=0,s=-2/r,h=0,c=-1,f=1,l=1,(u=new t(9))[0]=n,u[1]=a,u[2]=i,u[3]=o,u[4]=s,u[5]=h,u[6]=c,u[7]=f,u[8]=l,u;var n,a,i,o,s,h,c,f,l,u}function i(e,r){const n=(a=new t(9),t!=Float32Array&&(a[1]=0,a[2]=0,a[3]=0,a[5]=0,a[6]=0,a[7]=0),a[0]=1,a[4]=1,a[8]=1,a);var a;return function(t,e,r){t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1}(n,e,r),n}a(h.canvas.width,h.canvas.height);const b=i(h.canvas.width,h.canvas.height);function o(){!function(t,e=[.9,.9,.9,1]){t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL)}(h),A.setData(m,h.STATIC_DRAW);const t=h.TRIANGLES;h.drawArrays(t,0,3)}_.setData(b);document.getElementById("corner").addEventListener("click",(()=>{m=u,o()}));document.getElementById("bigger").addEventListener("click",(()=>{m=g,o()}));document.getElementById("center").addEventListener("click",(()=>{m=d,o()})),o()}catch(t){console.log(t.message)}
//# sourceMappingURL=index.9eb78fb1.js.map