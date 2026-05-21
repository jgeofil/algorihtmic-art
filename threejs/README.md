# Advanced three.js examples

This directory showcases creative scenes that highlight powerful features of three.js. The examples are ordered to build up in capability:

- **shaderSphere.js** – Applies a custom GLSL fragment shader to a sphere for animated, psychedelic colours.
- **instancedSpiral.js** – Uses an InstancedMesh to render hundreds of cubes swirling upward in a spiral.
- **gltfScene.js** – Loads an external glTF model and allows the viewer to orbit around it.

## Canvas & DOM examples

This directory also contains general-purpose scripts for creative coding. They are vanilla JS and do not require three.js.

- **index.js** – A helper module for simple animations. It is not a standalone example but is used by the other scripts.
- **bouncingBall.js** – A simple canvas animation of a bouncing ball.
- **example.js** – A simple canvas animation of a moving square.
- **fadeText.js** – A simple DOM animation that fades text in and out.

## Running a scene

1. Create an HTML file in this folder that loads the desired script as a module:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Creative Coding</title>
    <style>
      body { margin: 0; }
      canvas { display: block; }
    </style>
  </head>
  <body>
    <!-- For canvas examples -->
    <canvas id="canvas"></canvas>
    <!-- For DOM examples -->
    <h1 id="text" style="text-align: center">Hello</h1>
    <!-- Load the desired script -->
    <script type="module" src="bouncingBall.js"></script>
  </body>
</html>
```

2. Open the file directly in a browser or serve it locally.

