class Game {
  constructor() {
    this.x = 150;
    this.y = 120;
    this.mouseY = 30;
    this.mouseX = 30;
    this.height = 50;
    this.width = 50;
  }

  preloadGame() {
    console.log("game preload");
    this.playerImg = loadImage("r2.png");
  }

  setupGame() {
    console.log("game setup");
    this.player = new Player();
    this.player.image = this.playerImg;
  }

  drawGame() {
    clear();
    fill("yellow");
    circle(this.mouseX, this.mouseY, 20);
    fill("cyan");

    push();
    strokeWeight(10);
    line(30, 100, 150, 75);
    pop();

    rect(this.x, this.y, this.height, this.width);
    this.player.drawPlayer();
  }
}
