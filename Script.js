document.addEventListener('mousemove', e => {
  let x = e.clientX;
  let y = e.clientY; 
  let message = "Position X: " + x 
    + ", Position Y: " + y; document.getElementById('output').innerHTML = message;
});
