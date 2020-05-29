//const { FILL } = require("./p5");

function setup() {
  createCanvas(1366, 768);
  background(51);
  frameRate(60);
  }
  
  function draw() {
    for (let i = 50; i < windowWidth; i += 50){
      stroke(255,0,0);
      line(i, 0, i, windowHeight);
    }
  }