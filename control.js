function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        pl1.move(-1,0);
    } else if (keyCode === RIGHT_ARROW) {
        pl1.move(1,0);
    }
    else if (keyCode === DOWN_ARROW) {
        pl1.move(0,1);
    }
    else if (keyCode === UP_ARROW) {
        pl1.move(0,-1);
    }
  }