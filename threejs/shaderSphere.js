import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 2;

const geometry = new THREE.SphereGeometry(0.7, 64, 64);
const material = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    varying vec2 vUv;
    void main() {
      vec2 uv = vUv;
      float wave = sin(uv.x * 10.0 + time) + cos(uv.y * 10.0 - time);
      vec3 color = 0.5 + 0.5 * cos(vec3(0.0, 2.0, 4.0) + wave);
      gl_FragColor = vec4(color, 1.0);
    }
  `
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

function animate(t) {
  material.uniforms.time.value = t * 0.001;
  sphere.rotation.y += 0.005;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
