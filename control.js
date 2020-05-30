function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        if (pl1.check_position(-1, 0, map1)) {pl1.move(-1,0);}
    } else if (keyCode === RIGHT_ARROW) {
        pl1.move(1,0);
    }
    else if (keyCode === DOWN_ARROW) {
        if (pl1.check_position(-1, 0, map1)) {pl1.move(0,1);}
        
    }
    else if (keyCode === UP_ARROW) {
        pl1.move(0,-1);
    }
  }