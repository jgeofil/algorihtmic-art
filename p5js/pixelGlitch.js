// Image glitch effect using direct pixel manipulation
let img;

function preload() {
  img = loadImage('https://p5js.org/assets/lf.png');
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (x + y * width) * 4;
      if (random() < 0.05) {
        let target = idx + 4 * floor(random(-10, 10));
        target = constrain(target, 0, pixels.length - 4);
        for (let i = 0; i < 4; i++) {
          let tmp = pixels[idx + i];
          pixels[idx + i] = pixels[target + i];
          pixels[target + i] = tmp;
        }
      }
    }
  }
  updatePixels();
  noLoop();
}

function draw() {}
