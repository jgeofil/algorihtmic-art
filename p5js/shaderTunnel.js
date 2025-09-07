// Custom fragment shader generating a color tunnel in WebGL mode
let myShader;

function preload() {
  const vert = `
  attribute vec3 aPosition;
  void main() {
    gl_Position = vec4(aPosition, 1.0);
  }`;

  const frag = `
  precision mediump float;
  uniform float uTime;
  uniform vec2 uResolution;
  void main() {
    vec2 st = (gl_FragCoord.xy - 0.5*uResolution)/uResolution.y;
    float radius = length(st);
    float angle = atan(st.y, st.x);
    float color = sin(10.0*radius - uTime*2.0);
    gl_FragColor = vec4(vec3(0.5 + 0.5*cos(angle*3.0 + color)), 1.0);
  }`;

  myShader = new p5.Shader(this._renderer, vert, frag);
}

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
}

function draw() {
  shader(myShader);
  myShader.setUniform('uTime', millis() / 1000.0);
  myShader.setUniform('uResolution', [width, height]);
  rect(-width / 2, -height / 2, width, height);
}
