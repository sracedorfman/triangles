class Triangle {
  constructor(posX, posY, dim, right, up) {
    this.posX = posX;
    this.posY = posY;
    this.dim = dim;
    this.right = right;
    this.up = up;
    this.strokeColor = COLOR;
    this.weight = WEIGHT;
  }

  render() {
    noFill();
    stroke(this.strokeColor);
    strokeWeight(this.weight);
    push();
      translate(this.posX, this.posY);
      triangle(
        0, 0,
        this.right ? this.dim : -1*this.dim, 0,
        0, this.up ? -1*this.dim : this.dim
      );
    pop();
  }
}