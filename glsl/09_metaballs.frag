precision highp float;
uniform vec2 u_resolution;
uniform float u_time;

float field(vec2 p) {
  vec2 a = vec2(sin(u_time)*0.3, cos(u_time)*0.3);
  vec2 b = vec2(cos(u_time*1.3)*0.3, sin(u_time*1.3)*0.3);
  float f = 0.2 / length(p - a);
  f += 0.2 / length(p - b);
  return f;
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*u_resolution)/u_resolution.y;
  float f = field(uv);
  float c = smoothstep(0.8,1.0,f);
  gl_FragColor = vec4(vec3(c),1.0);
}
