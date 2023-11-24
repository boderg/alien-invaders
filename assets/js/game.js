const canvas = document.getElementById("alienGame");
const ctx = canvas.getContext("2d");

let friendly = document.getElementById("friendly");

let friendlyX = 143; // initial x position
let speed = 5; // speed of movement


window.addEventListener('keydown', function(e) {
  switch(e.key) {
    case 'ArrowLeft':
      friendlyX -= speed; // move left
      break;
    case 'ArrowRight':
      friendlyX += speed; // move right
      break;
  }
});

function startGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas
  ctx.drawImage(friendly, friendlyX, 125, friendly.width / 35, friendly.height / 35);
}

setInterval(startGame, 1000/60);

