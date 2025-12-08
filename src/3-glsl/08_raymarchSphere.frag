precision highp float;
uniform vec2 u_resolution;

float sdSphere(vec3 p, float r){
  return length(p) - r;
}

float map(vec3 p){
  return sdSphere(p, 1.0);
}

void main(){
  vec2 uv=(gl_FragCoord.xy*2.0-u_resolution)/u_resolution.y;
  vec3 ro=vec3(0.0,0.0,3.0);
  vec3 rd=normalize(vec3(uv,-1.5));
  float t=0.0;
  for(int i=0;i<64;i++){
    vec3 p=ro+rd*t;
    float d=map(p);
    if(d<0.001) break;
    t+=d;
    if(t>10.0) break;
  }
  vec3 col=vec3(0.0);
  if(t<10.0){
    vec3 p=ro+rd*t;
    vec3 n=normalize(p);
    col = n*0.5+0.5;
  }
  gl_FragColor = vec4(col,1.0);
}
