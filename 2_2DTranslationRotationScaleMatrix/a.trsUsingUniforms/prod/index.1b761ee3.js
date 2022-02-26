const t=[0,0,30,0,0,150,0,150,30,0,30,150,30,0,100,0,30,30,30,30,100,0,100,30,30,60,67,60,30,90,30,90,67,60,67,90];"undefined"!=typeof Float32Array&&Float32Array,Math.random;var e=Math.PI/180;function n(t){return t*e}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});function o(t,e,n){const o=t.createShader(e);t.shaderSource(o,n),t.compileShader(o);if(t.getShaderParameter(o,t.COMPILE_STATUS))return o;{const e=t.getShaderInfoLog(o);throw t.deleteShader(o),new Error(`HelperFunctions-createShader-Error: ${e}`)}}class a{constructor(t,e,n,o){this.gl=t,this.buffer_type="ARRAY",this.data_type=e,this.attributeLocation=this.gl.getAttribLocation(n,o),this.arrayBuffer=this.gl.createBuffer()}bufferFormat(t,e,n,o){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),this.gl.vertexAttribPointer(this.attributeLocation,t,this.data_type,e,n,o),this.gl.enableVertexAttribArray(this.attributeLocation)}setData(t,e){let n;if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.arrayBuffer),n=t,"number"==typeof t[0]){n=new Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}else if(Array.isArray(t)){n=new Array(t.length*t[0].length);for(let e=0;e<t.length;e++)for(let o=0;o<t[0].length;o++)n[e*t[0].length+o]=t[e][o]}switch(this.data_type){case this.gl.FLOAT:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(n),e);break;case this.gl.UNSIGNED_BYTE:this.gl.bufferData(this.gl.ARRAY_BUFFER,new Uint8Array(n),e)}}delete(){this.gl.deleteBuffer(this.arrayBuffer)}}class r{constructor(t,e,n,o){this.gl=t,this.data_type=o,this.data=null,this.uniformLocation=t.getUniformLocation(e,n)}setData(...t){switch(this.data_type){case"uniform1i":this.gl.uniform1i(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform1f":this.gl.uniform1f(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform2f":this.gl.uniform2f(this.uniformLocation,t[0],t[1]),this.data=[t[0],t[1]];break;case"uniform4f":this.gl.uniform4f(this.uniformLocation,t[0],t[1],t[2],t[3]),this.data=[t[0],t[1],t[2],t[3]];break;case"uniform2fv":this.gl.uniform2fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform3fv":this.gl.uniform3fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniform4fv":this.gl.uniform4fv(this.uniformLocation,t[0]),this.data=t[0];break;case"uniformMatrix3fv":this.gl.uniformMatrix3fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;case"uniformMatrix4fv":this.gl.uniformMatrix4fv(this.uniformLocation,!1,t[0]),this.data=t[0];break;default:throw new Error(`UniformClass: function ${this.type} has not been implemented.`)}}}try{const e=function(t,e="webgl2",n){const o=document.getElementById(t);if(!o)throw new Error(`HelperFunctions-createGLContext-Error: Could not locate canvas element with id ${t}`);return{gl:o.getContext(e,n),canvas:o}}("my_canvas"),s=e.gl;!function(t){const e=t.clientWidth,n=t.clientHeight,o=t.width!==e||t.height!==n;o&&(t.width=e,t.height=n)}(e.canvas),s.viewport(0,0,s.canvas.width,s.canvas.height);const u=o(s,s.VERTEX_SHADER,"#version 300 es\n\nin vec2 a_position_v2;\n\nuniform vec2 u_resolution_v2;\nuniform vec2 u_translation_v2;\nuniform vec2 u_rotation_v2;\nuniform vec2 u_scale_v2;\n\nvoid main() {\n  // define scale\n  vec2 scaledPosition_v2 = a_position_v2 * u_scale_v2;\n\n  // define rotation\n  vec2 rotatedPosition_v2 = vec2(\n    scaledPosition_v2.x * u_rotation_v2.y + scaledPosition_v2.y * u_rotation_v2.x,\n    scaledPosition_v2.y * u_rotation_v2.y - scaledPosition_v2.x * u_rotation_v2.x\n  );\n\n  // add in the translation and rotation\n  vec2 position_v2 = rotatedPosition_v2 + u_translation_v2;\n\n  // convert the position from pixels to 0.0 to 1.0\n  vec2 zeroToOne_v2 = position_v2 / u_resolution_v2;\n\n  // convert from 0->1 to 0->2\n  vec2 zeroToTwo_v2 = zeroToOne_v2 * 2.0;\n\n  // convert from 0->2 to -1 -> +1 (clip space)\n  vec2 clipSpace_v2 = zeroToTwo_v2 - 1.0;\n\n  gl_Position = vec4(clipSpace_v2 * vec2(1, -1), 0, 1);\n}\n"),c=o(s,s.FRAGMENT_SHADER,"#version 300 es\n\nprecision highp float;\n\nuniform vec4 u_color_v4;\n\n// We need to declare an output for the fragment shader\nout vec4 outColor_v4;\n\nvoid main() {\n  outColor_v4 = u_color_v4;\n}"),l=function(t,e,n){const o=t.createProgram();if(t.attachShader(o,e),t.attachShader(o,n),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS))return o;{const e=t.getProgramInfoLog(o);throw t.deleteProgram(o),new Error(`HelperFunctions-createProgram-Error: ${e}`)}}(s,u,c);s.useProgram(l);const h=s.FLOAT,f=new a(s,h,l,"a_position_v2");f.setData(t,s.STATIC_DRAW);const d=s.createVertexArray();s.bindVertexArray(d);{const t=2,e=!1,n=0,o=0;f.bufferFormat(t,e,n,o)}new r(s,l,"u_resolution_v2","uniform2f").setData(s.canvas.width,s.canvas.height);new r(s,l,"u_color_v4","uniform4f").setData(Math.random(),Math.random(),Math.random(),1);const m=new r(s,l,"u_translation_v2","uniform2f");let v=[0,0];m.setData(v[0],v[1]);const _=new r(s,l,"u_rotation_v2","uniform2f");let g=[0,1];_.setData(g[0],g[1]);const p=new r(s,l,"u_scale_v2","uniform2f");let y=[1,1];p.setData(y[0],y[1]);let x=0;function i(){!function(t,e=[.9,.9,.9,1]){t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL)}(s);const t=s.TRIANGLES;s.drawArrays(t,0,18)}const E=document.getElementById("x_translate"),A=document.getElementById("y_translate"),L=document.getElementById("x_translate_output"),w=document.getElementById("y_translate_output");E.step=A.step=4,E.min=A.min=0,E.max=A.max=800,E.value=L.textContent=v[0],A.value=w.textContent=v[1],E.addEventListener("input",(()=>{v[0]=L.textContent=+E.value,m.setData(v[0],v[1]),i()})),A.addEventListener("input",(()=>{v[1]=w.textContent=+A.value,m.setData(v[0],v[1]),i()}));const B=document.getElementById("x_rotate"),b=document.getElementById("y_rotate"),F=document.getElementById("x_rotate_output"),C=document.getElementById("y_rotate_output");B.step=b.step=.1,B.min=b.min=-1,B.max=b.max=1,B.value=F.textContent=g[0],b.value=C.textContent=g[1],B.addEventListener("input",(()=>{g[0]=F.textContent=(+B.value).toFixed(2),g[1]=C.textContent=Math.sqrt(1-Math.pow(g[0],2)).toFixed(2),_.setData(g[0],g[1]),i()})),b.addEventListener("input",(()=>{g[1]=C.textContent=(+b.value).toFixed(2),g[0]=F.textContent=Math.sqrt(1-Math.pow(g[1],2)).toFixed(2),_.setData(g[0],g[1]),i()}));const I=document.getElementById("x_scale"),D=document.getElementById("y_scale"),T=document.getElementById("x_scale_output"),R=document.getElementById("y_scale_output");I.step=D.step=.2,I.min=D.min=.2,I.max=D.max=4,I.value=T.textContent=y[0],D.value=R.textContent=y[1],I.addEventListener("input",(()=>{y[0]=T.textContent=+I.value,p.setData(y[0],y[1]),i()})),D.addEventListener("input",(()=>{y[1]=R.textContent=+D.value,p.setData(y[0],y[1]),i()}));const P=document.getElementById("angle"),S=document.getElementById("angle_output");P.step=5,P.min=0,P.max=360,P.value=S.textContent=x,P.addEventListener("input",(()=>{x=S.textContent=+P.value;const t=n(x);_.setData(Math.sin(t),Math.cos(t)),i()})),i()}catch(t){console.log(t.message)}
//# sourceMappingURL=index.1b761ee3.js.map