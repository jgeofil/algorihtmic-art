precision highp float;
uniform vec2 u_resolution;
uniform float u_time;

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 p = uv - 0.5;
  float z = fract(u_time * 0.1);
  float brightness = 0.0;
  for(int i=0;i<32;i++){
    vec2 pos = vec2(rand(vec2(i,0.0)), rand(vec2(0.0,i)));
    float size = rand(vec2(i,1.0))*0.002;
    vec2 star = pos - p*(1.0 - z);
    float d = length(star);
    brightness += smoothstep(size,0.0,d);
  }
  gl_FragColor = vec4(vec3(brightness),1.0);
}
