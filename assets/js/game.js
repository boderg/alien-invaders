const canvas = document.getElementById("alienGame");
const ctx = canvas.getContext("2d");

window.onload = function () {
  let friendly = document.getElementById("friendly");
  ctx.drawImage(friendly, 143, 125, friendly.width / 35, friendly.height / 35);
}