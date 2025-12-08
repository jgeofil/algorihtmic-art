precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float wave = sin((uv.y + u_time) * 10.0);
  float color = step(0.0, wave);
  gl_FragColor = vec4(vec3(color), 1.0);
}
