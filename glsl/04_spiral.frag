precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / u_resolution.y;
  float a = atan(uv.y, uv.x);
  float r = length(uv);
  float f = fract(r - u_time * 0.2 + a / 6.2831);
  gl_FragColor = vec4(vec3(f), 1.0);
}
