//const { FILL } = require("./p5");
let img;
function setup() {
  createCanvas(1366, 768);
  background(51);
  frameRate(60);
  rectMode(CENTER);
  img = loadImage("/assets/hero.png")
  }
  let i =0;
  function draw() {
    for (let i = 50; i < windowWidth; i += 50){
      stroke(255,0,0);
      line(i, 0, i, windowHeight);
    }
    image(img,width/2,height/2);
    rotate(i)
    rect(0, 0, 100, 100);
    rotate(CENTER)
    rotate(360+i)
    rect(500, 500, 100, 100);

    i++;
  }