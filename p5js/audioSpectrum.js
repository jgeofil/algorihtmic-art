// Audio-reactive radial spectrum using p5.js sound features
let fft, song;

function preload() {
  // sample from p5.js asset library
  song = loadSound('https://p5js.org/assets/beat.mp3');
}

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  fft = new p5.FFT();
  song.loop();
  noFill();
}

function draw() {
  background(0);
  stroke(255);
  let spectrum = fft.analyze();
  translate(width / 2, height / 2);
  for (let i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, 360);
    let amp = spectrum[i];
    let r = map(amp, 0, 256, 20, 200);
    let x = r * cos(angle);
    let y = r * sin(angle);
    line(0, 0, x, y);
  }
}
