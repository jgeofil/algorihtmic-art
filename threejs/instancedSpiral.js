import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 5, 15);

const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshNormalMaterial();
const count = 500;
const mesh = new THREE.InstancedMesh(geometry, material, count);

const dummy = new THREE.Object3D();
for (let i = 0; i < count; i++) {
  const angle = i * 0.1;
  const y = i * 0.02;
  dummy.position.set(Math.cos(angle) * 5, y, Math.sin(angle) * 5);
  dummy.rotation.set(angle, angle * 0.5, 0);
  dummy.updateMatrix();
  mesh.setMatrixAt(i, dummy.matrix);
}
scene.add(mesh);

function animate(t) {
  mesh.rotation.y = t * 0.0005;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
