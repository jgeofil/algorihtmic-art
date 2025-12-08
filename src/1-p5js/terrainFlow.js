let cols, rows;
const scl = 20;
const w = 1400;
const h = 1000;
let flying = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  cols = w / scl;
  rows = h / scl;
}

function draw() {
  flying -= 0.03;
  background(0);
  stroke(200);
  noFill();
  rotateX(PI / 3);
  translate(-w / 2, -h / 2);

  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);
    let xoff = 0;
    for (let x = 0; x <= cols; x++) {
      const z1 = map(noise(xoff, yoff), 0, 1, -100, 100);
      vertex(x * scl, y * scl, z1);
      const z2 = map(noise(xoff, yoff + 0.1), 0, 1, -100, 100);
      vertex(x * scl, (y + 1) * scl, z2);
      xoff += 0.1;
    }
    endShape();
    yoff += 0.1;
  }
}
