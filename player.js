class Player {
  constructor() {
    this.x = 10;
    this.y = 10;
    this.image;
  }

  preloadPlayer() {
    this.image = loadImage("r2.png");
  }

  setupPlayer() {
    console.log("player setup");
  }

  drawPlayer() {
    fill("red");
    if (keyIsDown(68)) {
      console.log("d");
      this.x += 2;
    }

    if (keyIsDown(65)) {
      console.log("a");
      this.x -= 2;
    }
    image(this.image, this.x, this.y, 100, 100);
  }
}
