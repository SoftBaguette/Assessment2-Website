// Get the canvas element
const canvas = document.getElementById("canvas");

// Check if the canvas element was found
if (!canvas) {
  console.error("Unable to find canvas element.");
}

// Get the canvas context
const ctx = canvas.getContext("2d");

// Check if the canvas context was successfully created
if (!ctx) {
  console.error("Unable to create canvas context.");
}

// Set the canvas dimensions to match its container
canvas.width = canvas.parentNode.clientWidth;
canvas.height = canvas.parentNode.clientHeight;

// Create an array to hold the raindrops
const raindrops = [];

// Define a function to create a new raindrop object
function createRaindrop() {
  const x = Math.random() * canvas.width;
  const y = 0;
  const speed = 2 + Math.random() * 5;
  const width = 1 + Math.random() * 4;
  const height = 5 + Math.random() * 20;
  return { x, y, speed, width, height };
}

// Define a function to draw a raindrop
function drawRaindrop(raindrop) {
  ctx.fillStyle = "blue";
  ctx.fillRect(raindrop.x, raindrop.y, raindrop.width, raindrop.height);
}

// Define a function to update a raindrop's position
function updateRaindrop(raindrop) {
  raindrop.y += raindrop.speed;
  if (raindrop.y > canvas.height) {
    raindrops.splice(raindrops.indexOf(raindrop), 1);
  }
}

// Define the animation loop
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Create new raindrops
  if (Math.random() < 0.05) {
    raindrops.push(createRaindrop());
  }

  // Draw and update existing raindrops
  raindrops.forEach((raindrop) => {
    drawRaindrop(raindrop);
    updateRaindrop(raindrop);
  });

  // Schedule the next frame
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
