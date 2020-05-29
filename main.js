//const { FILL } = require("./p5");

let pl1 = new player();
let i = 0;
function setup() {
  createCanvas(1366, 768);
  background(51);
  frameRate(60);
  rectMode(CENTER);
  pl1.init("/assets/hero.png");
  }


  function draw() {
    draw_net();
    pl1.move(i%10,i%10);
    pl1.scale_k(1 + i % 10);
    pl1.draw();
    i++;
  }

  function draw_net(){
    for (let i = 50; i < windowWidth; i += 50){
      stroke(255,0,0);
      line(i, 0, i, windowHeight);
      line(0,i,windowWidth,i );
    }
  }