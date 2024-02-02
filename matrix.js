const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

const characters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const columns = Math.floor(canvasWidth / 20);

const yPositions = [];

for (let i = 0; i < columns; i++) {
  yPositions[i] = Math.random() * canvasHeight;
}

function updateMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  ctx.fillStyle = "red";
  ctx.font = "12px timesnewroman";

  for (let i = 0; i < columns; i++) {
    const character = characters[Math.floor(Math.random() * characters.length)];
    const y = yPositions[i];

    ctx.fillText(character, i * 20, y);

    yPositions[i] += 20;

    if (yPositions[i] > canvasHeight && Math.random() > 0.98) {
      yPositions[i] = 0;
    }
  }
}

function renderMatrix() {
  requestAnimationFrame(renderMatrix);
  updateMatrix();
}

renderMatrix();
