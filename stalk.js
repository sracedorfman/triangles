class Stalk {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.up = random(1) > 0.5;
    this.strokeColor = COLOR;
    this.weight = WEIGHT;
    this.numTris = floor(random(1,6));
    this.height = this.up ? min(this.posY-random(5,10), random(50, 100)) : min(height-this.posY-random(5,10), random(50, 100));
    this.dim = random(5, this.height/this.numTris*0.6);
    this.triangle = new Triangle(100,100,30,false,false);
    this.triangles = [];
    for (let i = 0; i < this.numTris; i++) {
      this.triangles.push(new Triangle(0, 0, this.dim, true, this.up));
    }
    this.nextPosX = this.posX+random(100)+this.dim+10;
    this.nextPosY = this.posY + (this.up ? -1 : 1)*(this.height-this.dim);
  }

  render() {
    noFill();
    stroke(this.strokeColor);
    strokeWeight(this.weight);
    push();
      translate(this.posX, this.posY);
      push();
      translate(0, this.up ? -(this.height-this.dim) : this.height-this.dim);
      console.log(this);
      for (let i = 0; i < this.numTris; i++) {
        this.triangles[i].render();
        console.log(this.triangles[i]);
        translate(0, this.up ? this.dim : -this.dim);
      }
      pop();
      line(0, 0, 0, this.up ? -this.height : this.height);
      line(0, this.nextPosY-this.posY, this.nextPosX-this.posX, this.nextPosY-this.posY);
    pop();
  }
}