const canvas = document.getElementById('canvas');

if (!canvas) {
  console.warn('Canvas element with id "canvas" not found.');
} else {
  const ctx = canvas.getContext('2d');
  let x = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(x, 10, 50, 50);
    x = (x + 2) % canvas.width;
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

