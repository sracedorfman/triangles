let COLOR;
const WEIGHT = 2;
const stalks = [];

function preload() {
  
}

function setup() {
  createCanvas(530, 530);

  COLOR = color(20, 150, 30);

  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);

  let thisStalk = new Stalk(0, 300);
  stalks.push(thisStalk);
  while (thisStalk.nextPosX < width) {
    thisStalk = new Stalk(thisStalk.nextPosX, thisStalk.nextPosY);
    stalks.push(thisStalk);
  }
}

function draw() {
  background(0);

  // let triangle = new Triangle(40, 40, 10, true, true);
  // triangle.render();


  stalks.forEach(stalk => {
    stalk.render();
  })
}