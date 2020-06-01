//const { FILL } = require("./p5");

let pl1 = new object();
let drzewo = new object();
let dom = new object();
let dirt = new object();
let grass = new object();
let i = 0;


let map1  = new map(15,15);
map1.map = [
  "121", "121", "121", "121", "121", "121", "121", "121", "121", "121", "121", "121","121", "121", "121",
  "121", "110", "121", "000", "100", "000", "010", "110", "121", "000", "100", "121","000", "000", "121",
  "121", "000", "121", "010", "110", "121", "121", "121", "121", "010", "110", "121","110", "121", "121", 
  "121", "100", "010", "110", "121", "121", "000", "110", "121", "000", "100", "121","000", "000", "121", 
  "121", "110", "121", "000", "100", "000", "110", "121", "121", "110", "110", "121","110", "121", "121", 
  "121", "100", "010", "110", "121", "121", "000", "110", "110", "100", "100", "000","000", "000", "121",
  "121", "110", "121", "000", "100", "121", "010", "110", "121", "000", "100", "121","000", "000", "121",
  "121", "121", "121", "010", "110", "100", "110", "121", "110", "010", "110", "100","110", "121", "121", 
  "121", "100", "010", "110", "121", "121", "000", "110", "121", "000", "100", "000","000", "100", "121",
  "121", "110", "121", "000", "100", "121", "110", "121", "110", "010", "110", "121","110", "121", "121", 
  "121", "100", "010", "110", "121", "121", "010", "110", "121", "100", "100", "121","000", "100", "121",
  "121", "110", "121", "000", "100", "121", "010", "110", "121", "000", "100", "000","000", "100", "121",
  "121", "121", "121", "010", "110", "121", "100", "121", "100", "110", "110", "121","110", "121", "121", 
  "121", "000", "010", "110", "121", "121", "000", "110", "121", "000", "100", "121","000", "100", "121",
  "121", "121", "121", "121", "121", "121", "121", "121", "121", "121", "121", "121","121", "121", "121"
  ];

function setup() {
  createCanvas(750, 750); //15 X 15
  frameRate(60);
  rectMode(CENTER);

  pl1.init("assets/hero.png");
  drzewo.init('assets/drzewo2.png');
  dom.init('assets/house.png');
  grass.init("assets/grass.png");
  dirt.init('assets/dirt.png');
  pl1.move_to(1, 1);
  map1.init();
  map1.cell_map[0].random_items();
  console.log(map1.cell_map[0].items[1]);
  }

  function draw() {
    background(51);
    //draw_grass();
    map1.draw_map();
    /*
    drzewo.move_to(12,11);
    dom.move_to(5,10);
    drzewo.draw();
    dom.draw();
    dirt.draw();
    dirt.move_to(1,1);
    dirt.draw();
    dirt.move_to(2,1);
    dirt.draw();
    */
    
    pl1.draw();
    draw_net();

    i++;
  }

  function draw_net(){
    for (let i = 50; i < width; i += 50){
      stroke(255,0,0);
      strokeWeight(2);
      line(i, 0, i, height);
      line(0,i,width,i );
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