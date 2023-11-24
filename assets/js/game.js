const canvas = document.getElementById("alienGame");
const ctx = canvas.getContext("2d");

let friendly = document.getElementById("friendly");

let friendlyX = 143; // initial x position
let speed = 5; // speed of movement

let projectiles = []; // array to hold projectiles

window.addEventListener('keydown', function(e) {
  switch(e.key) {
    case 'ArrowLeft':
      if (friendlyX - speed >= 0) { // check if friendly is within the left edge of the canvas
        friendlyX -= speed; // move left
      }
      break;
    case 'ArrowRight':
      if (friendlyX + speed <= canvas.width - friendly.width / 35) { // check if friendly is within the right edge of the canvas
        friendlyX += speed; // move right
      }
      break;
    case ' ':
      // fire a projectile
      projectiles.push({x: friendlyX, y: 125}); // add a new projectile to the array
      break;
  }
});

function startGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas

// draw and move projectiles
for(let i = 0; i < projectiles.length; i++) {
  let projectile = projectiles[i];
  projectile.y -= 5; // move the projectile up
  ctx.fillStyle = 'rgb(167, 249, 2)'; // set the color
  ctx.fillRect(projectile.x, projectile.y, 1, 4); // draw the projectile
}

  ctx.drawImage(friendly, friendlyX, 125, friendly.width / 35, friendly.height / 35);
}

setInterval(startGame, 1000/60);

