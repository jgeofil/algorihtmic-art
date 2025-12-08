# GLSL shader demos

Ten fragment shader examples demonstrating increasing complexity. Each file
expects `u_time` and/or `u_resolution` uniforms when appropriate.

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

Each shader can be plugged into a WebGL setup by loading the file as a fragment
shader and supplying the required uniforms.
