# Advanced three.js examples

This directory showcases creative scenes that highlight powerful features of three.js. The examples are ordered to build up in capability:

- **shaderSphere.js** – Applies a custom GLSL fragment shader to a sphere for animated, psychedelic colours.
- **instancedSpiral.js** – Uses an InstancedMesh to render hundreds of cubes swirling upward in a spiral.
- **gltfScene.js** – Loads an external glTF model and allows the viewer to orbit around it.

## Running a scene

1. Create an HTML file in this folder that loads the desired script as a module:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script type="module" src="shaderSphere.js"></script>
  </head>
  <body style="margin:0"></body>
</html>
```

2. Open the file directly in a browser or serve it locally.

Each scene imports three.js from a CDN and is self-contained for easy experimentation.
