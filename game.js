class Game {
  constructor() {
    this.x = 150;
    this.y = 120;
    this.height = 50;
    this.width = 50;
  }

  preloadGame() {
    console.log("game preload");
  }

  setupGame() {
    console.log("game setup");
  }

  drawGame() {
    clear();
    fill("cyan");

    rect(this.x, this.y, this.height, this.width);
  }
}
