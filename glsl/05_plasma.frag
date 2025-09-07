precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float c = sin(uv.x * 10.0 + u_time) + sin(uv.y * 10.0 - u_time);
  c += sin((uv.x + uv.y) * 10.0);
  gl_FragColor = vec4(vec3(c * 0.5 + 0.5), 1.0);
}
