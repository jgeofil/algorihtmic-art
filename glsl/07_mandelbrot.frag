precision highp float;
uniform vec2 u_resolution;

void main() {
  vec2 c = (gl_FragCoord.xy - 0.5 * u_resolution) / u_resolution.y * 2.5 - vec2(0.5,0.0);
  vec2 z = vec2(0.0);
  int iterations = 0;
  const int maxIter = 64;
  while (iterations < maxIter && dot(z,z) < 4.0) {
    z = vec2(z.x*z.x - z.y*z.y, 2.0*z.x*z.y) + c;
    iterations++;
  }
  float t = float(iterations) / float(maxIter);
  gl_FragColor = vec4(vec3(t), 1.0);
}
