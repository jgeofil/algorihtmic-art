# animation-js

## Running the example

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
