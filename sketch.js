let COLOR;
const WEIGHT = 2;

function preload() {
  
}

function setup() {
  createCanvas(530, 530);

  COLOR = color(20, 150, 30);

  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0);

  let triangle = new Triangle(40, 40, 10, true, true);
  triangle.render();
}