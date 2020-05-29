//const { FILL } = require("./p5");

let pl1 = new object();
let i = 0;
function setup() {
  createCanvas(1350, 750);
  frameRate(10);
  rectMode(CENTER);
  pl1.init("/assets/hero.png");
  }


  function draw() {
    background(51);

    draw_net();
    pl1.move_to(i%15,i%27);
    pl1.scale_k(1 + (i % 10));
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