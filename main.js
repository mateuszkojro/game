//const { FILL } = require("./p5");

let pl1 = new object();
let drzewo = new object();
let dom = new object();
let dirt = new object();
let grass = new object();
let i = 0;


let map1  = new map(3,3);
map1.map = ["02", "12", "02" , "11", "01", "12", "01", "11", "12"];

function setup() {
  createCanvas(1350, 750); //27 X 15
  frameRate(60);
  rectMode(CENTER);
  pl1.init("assets/hero.png");
  drzewo.init('assets/drzewo.png');
  dom.init('assets/house.png');
  grass.init("assets/grass.png");
  dirt.init('assets/dirt.png');
  }

  function draw() {
    background(51);
    //draw_grass();
    map1.draw_map();
    
    drzewo.move_to(12,11);
    dom.move_to(5,10)
    drzewo.draw();
    dom.draw();
    dirt.draw();
    dirt.move_to(1,1);
    dirt.draw();
    dirt.move_to(2,1);
    dirt.draw();
    pl1.draw();
    draw_net();

    i++;
  }

  function draw_net(){
    for (let i = 50; i < windowWidth; i += 50){
      stroke(255,0,0);
      line(i, 0, i, windowHeight);
      line(0,i,windowWidth,i );
    }
  }
/*
  function draw_grass(){
    for (let x = 0; x < width;x += 50){
      for (let y = 0; y < height; y += 50){
        image(grass, x, y);
      }
    }
  }
  */