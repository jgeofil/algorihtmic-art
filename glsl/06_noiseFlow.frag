precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0,0.0));
  float c = hash(i + vec2(0.0,1.0));
  float d = hash(i + vec2(1.0,1.0));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(a,b,u.x)+ (c-a)*u.y*(1.0-u.x)+ (d-b)*u.x*u.y;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution * 3.0;
  float n = noise(uv + u_time * 0.2);
  gl_FragColor = vec4(vec3(n), 1.0);
}
