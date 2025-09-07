# animation-js

## Running the examples

1. Create an `index.html` file in the project root with the following content:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>requestAnimationFrame example</title>
  </head>
  <body>
    <canvas id="canvas" width="300" height="100"></canvas>
    <script type="module" src="src/example.js"></script>
  </body>
</html>
```

2. Open the file directly in a browser or serve it locally (e.g. `npx serve .`) and navigate to the page.
3. You should see a red square move across the canvas.

## More creative examples

- **Bouncing ball** – Replace the script tag in the HTML with `src/bouncingBall.js` to see a ball continuously bounce within the canvas.
- **Fading text** – Add an element like `<div id="text">Hello</div>` to the HTML and replace the script tag's `src` with `src/fadeText.js` to see the text fade in and out.

Each example imports the `animate` helper from `src/index.js`, showcasing different ways to animate values on the page.

## Learning path

Explore the libraries in a rough progression of complexity:

1. **p5.js sketches** – quick experiments in 2D and WebGL found in `p5js`:
   - `audioSpectrum` – audio-reactive radial visualizer using p5.sound.
   - `pixelGlitch` – direct pixel manipulation for glitch art effects.
   - `terrainFlow` – flowing 3D noise terrain drawn with p5's WEBGL mode.
   - `shaderTunnel` – custom fragment shader generating a colour tunnel.
   - _See `p5js/README.md` for how to run each sketch._
2. **three.js scenes** – larger 3D environments in `threejs`:
   - `shaderSphere` – animated sphere coloured by a custom fragment shader.
   - `instancedSpiral` – hundreds of instanced cubes swirling in a spiral.
   - `gltfScene` – loads a glTF model with orbit controls.
   - _See `threejs/README.md` for how to run each scene._
3. **GLSL shaders** – raw fragment shaders in `glsl`:
   - `01_colorPulse.frag` – simple time-based color oscillation.
   - `02_radialGradient.frag` – distance-based gradient from the screen center.
   - `03_stripeWave.frag` – animated stripes that wave vertically.
   - `04_spiral.frag` – spiral pattern spinning over time.
   - `05_plasma.frag` – classic plasma effect using multiple sine waves.
   - `06_noiseFlow.frag` – flowy procedural texture driven by value noise.
   - `07_mandelbrot.frag` – iterative Mandelbrot fractal renderer.
   - `08_raymarchSphere.frag` – ray-marched sphere with normal shading.
   - `09_metaballs.frag` – two moving metaballs blending together.
   - `10_starfield.frag` – pseudo-3D starfield generated in a loop.
   - _See `glsl/README.md` for integration notes._

Each step builds on the previous one, from p5.js sketches to three.js scenes to raw GLSL experiments.
