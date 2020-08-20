console.log("test?");
const game = new Game();
console.log(game);

function preload() {
  game.preloadGame();
}

function setup() {
  createCanvas(600, 300);
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
