var t="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;Math.PI;Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});class e{constructor(t,e,r,n){this.gl=t,this.type=e,this.attributeLocation=this.gl.getAttribLocation(r,n),this.buffer=this.gl.createBuffer()}bufferFormat(t,e,r,n){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer),this.gl.vertexAttribPointer(this.attributeLocation,t,this.type,e,r,n),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(t,e){switch(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer),this.type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),e);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(t),e)}}}class r{constructor(t,e,r,n){this.gl=t,this.type=n,this.uniformLocation=t.getUniformLocation(e,r)}setData(...t){switch(this.type){case"uniform1f":this.gl.uniform1f(this.uniformLocation,t[0]);break;case"uniform2f":this.gl.uniform2f(this.uniformLocation,t[0],t[1]);break;case"uniform4f":this.gl.uniform4f(this.uniformLocation,t[0],t[1],t[2],t[3]);break;case"uniform2fv":this.gl.uniform2fv(this.uniformLocation,t[0]);break;case"uniform3fv":this.gl.uniform3fv(this.uniformLocation,t[0]);break;case"uniform4fv":this.gl.uniform4fv(this.uniformLocation,t[0]);break;case"uniformMatrix3fv":this.gl.uniformMatrix3fv(this.uniformLocation,!1,t[0]);break;case"uniformMatrix4fv":this.gl.uniformMatrix4fv(this.uniformLocation,!1,t[0]);break;default:throw new Error(`UniformClass: function ${this.type} has not been implemented.`)}}}function n(t,e,r){const n=t.createShader(e);t.shaderSource(n,r),t.compileShader(n);if(t.getShaderParameter(n,t.COMPILE_STATUS))return n;{const e=t.getShaderInfoLog(n);throw t.deleteShader(n),new Error("createShader: "+e)}}try{const s=function(t,e="webgl2",r){const n=document.getElementById(t);if(!n)throw new Error(`createGLContext: Could not locate canvas element with id ${t}`);return{gl:n.getContext(e,r),canvas:n}}("my_canvas"),c=s.gl;!function(t){const e=t.clientWidth,r=t.clientHeight,n=t.width!==e||t.height!==r;n&&(t.width=e,t.height=r)}(s.canvas),c.viewport(0,0,c.canvas.width,c.canvas.height);const h=n(c,c.VERTEX_SHADER,"#version 300 es\n\nin vec2 a_position_v2;\n\nuniform mat3 u_transform_m3;\n\nvoid main() {\n  // Multiply the position by the transform matrix\n  gl_Position = vec4((u_transform_m3 * vec3(a_position_v2, 1)).xy, 0, 1);\n}"),f=n(c,c.FRAGMENT_SHADER,'#version 300 es\n\n// Fragment shaders don\'t have a default precision so we need\n//   to pick one. highp is a good default. It means "high precision"\n\nprecision highp float;\n\n// We need to declare an output for the fragment shader\nout vec4 outColor_v4;\n\nvoid main() {\n  // outColor variable is responsible for setting (red, green, blue)\n  outColor_v4 = vec4(1, 0, 0.5, 1); // return reddish-purple\n}'),u=function(t,e,r){const n=t.createProgram();if(t.attachShader(n,e),t.attachShader(n,r),t.linkProgram(n),t.getProgramParameter(n,t.LINK_STATUS))return n;{const e=t.getProgramInfoLog(n);throw t.deleteProgram(n),new Error("createProgram: "+e)}}(c,h,f);c.useProgram(u);const l=[0,300,300,0,0,0],m=[0,600,600,0,0,0],g=[150,450,450,150,150,150];let d=l;const v=c.FLOAT,A=new e(c,v,u,"a_position_v2");A.setData(d,c.STATIC_DRAW);const b=c.createVertexArray();c.bindVertexArray(b);{const t=2,e=!1,r=0,n=0;A.bufferFormat(t,e,r,n)}const _=new r(c,u,"u_transform_m3","uniformMatrix3fv");function i(e,r){return n=2/e,i=0,o=0,a=0,s=-2/r,c=0,h=-1,f=1,u=1,(l=new t(9))[0]=n,l[1]=i,l[2]=o,l[3]=a,l[4]=s,l[5]=c,l[6]=h,l[7]=f,l[8]=u,l;var n,i,o,a,s,c,h,f,u,l}function o(e,r){const n=(i=new t(9),t!=Float32Array&&(i[1]=0,i[2]=0,i[3]=0,i[5]=0,i[6]=0,i[7]=0),i[0]=1,i[4]=1,i[8]=1,i);var i;return function(t,e,r){t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1}(n,e,r),n}i(c.canvas.width,c.canvas.height);const E=o(c.canvas.width,c.canvas.height);function a(){!function(t,e=[0,0,0,1]){t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)}(c),A.setData(d,c.STATIC_DRAW);const t=c.TRIANGLES;c.drawArrays(t,0,3)}_.setData(E);document.getElementById("corner").addEventListener("click",(()=>{d=l,a()}));document.getElementById("bigger").addEventListener("click",(()=>{d=m,a()}));document.getElementById("center").addEventListener("click",(()=>{d=g,a()})),a()}catch(t){console.log(t.message)}
//# sourceMappingURL=index.a7bff539.js.map