precision highp float;
uniform vec2 u_resolution;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float d = distance(uv, vec2(0.5));
  gl_FragColor = vec4(vec3(1.0 - d), 1.0);
}
