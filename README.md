# animation-js

## Running the examples

1. Create an `index.html` file in the project root with the following content:

```html
<!doctype html>
<html>
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
- **Fading text** – Add an element like `<div id="text">Hello</div>` to the HTML and use `src/fadeText.js` to fade the text in and out.

Each example imports the `animate` helper from `src/index.js`, showcasing different ways to animate values on the page.

## p5.js sketches

Advanced demonstrations leveraging p5.js live in the `p5js` directory:

- **audioSpectrum** – audio-reactive radial visualizer using p5.sound.
- **shaderTunnel** – custom fragment shader rendered in WebGL mode.
- **pixelGlitch** – direct pixel manipulation for glitch art effects.

Each sketch can be run by loading p5.js in an HTML file and including the desired script from the `p5js` folder.

## three.js scenes

Creative three.js demos live in the `threejs` directory:

- **shaderSphere** – animated sphere coloured by a custom fragment shader.
- **instancedSpiral** – hundreds of instanced cubes swirling in a spiral.
- **gltfScene** – loads a glTF model with orbit controls.

Each scene can be run by creating an HTML file that imports the desired script as a module.

## GLSL shaders

Standalone fragment shaders live in the `glsl` directory:

- **01_colorPulse.frag** – simple time-based color oscillation.
- **02_radialGradient.frag** – distance-based gradient from the screen center.
- **03_stripeWave.frag** – animated stripes that wave vertically.
- **04_spiral.frag** – spiral pattern spinning over time.
- **05_plasma.frag** – classic plasma effect using multiple sine waves.
- **06_noiseFlow.frag** – flowy procedural texture driven by value noise.
- **07_mandelbrot.frag** – iterative Mandelbrot fractal renderer.
- **08_raymarchSphere.frag** – ray-marched sphere with normal shading.
- **09_metaballs.frag** – two moving metaballs blending together.
- **10_starfield.frag** – pseudo-3D starfield generated in a loop.

Each shader can be dropped into a WebGL setup by loading the file as a fragment shader and supplying the required uniforms.
