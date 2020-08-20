console.log("test?");
const game = new Game();
console.log(game);

function preload() {
  game.preloadGame();
}

function setup() {
  createCanvas(600, 300);
  background(color(0, 0, 255));
  game.setupGame();
}

function draw() {
  game.drawGame();
}

function keyPressed() {
  if (keyCode === 38) {
    console.log("up arrow has been pressed");
    game.y -= 10;
  }

  if (keyCode === 40) {
    console.log("down arrow has been pressed");
    game.y += 10;
  }
}

function mouseClicked() {
  console.log("click the mouse", mouseX, mouseY);
  game.mouseX = mouseX;
  game.mouseY = mouseY;
}
