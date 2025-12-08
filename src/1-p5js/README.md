# Advanced p5.js examples

This directory showcases creative sketches that highlight powerful features of p5.js. The examples are arranged in a loose progression of complexity:

- **audioSpectrum.js** – Uses the p5.sound library and an FFT to draw a radial audio spectrum that reacts to a looping beat.
- **pixelGlitch.js** – Loads an image and glitches pixels directly for a chaotic, data-bent aesthetic.
- **terrainFlow.js** – Generates a flowing 3D noise terrain in WebGL mode, bridging toward full 3D scenes.
- **shaderTunnel.js** – Demonstrates WebGL mode with a custom fragment shader generating a swirling colour tunnel.

## Running a sketch

1. Create an HTML file in this folder that loads p5.js and the desired sketch:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/addons/p5.sound.min.js"></script>
    <script src="shaderTunnel.js"></script>
  </head>
  <body></body>
</html>
```

2. Open the file directly in a browser or serve it locally.

Each sketch is self-contained and can be swapped in the HTML script tag to explore different capabilities of p5.js.
