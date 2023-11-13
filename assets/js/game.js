const canvas = document.getElementById("alienGame");
const ctx = canvas.getContext("2d");

let friendly = document.getElementById("friendly");

function game() {
  ctx.drawImage(friendly, 143, 125, friendly.width / 35, friendly.height / 35);
}

setInterval(game, 1000/60);

