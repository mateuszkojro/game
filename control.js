function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		//if (pl1.check_position(-1, 0, map1)) {pl1.animation_move(-1,0);}
		if (pl1.check_position(-1, 0, map1)) {
			pl1.move(-1, 0);
		}
	} else if (keyCode === RIGHT_ARROW) {
		//if (pl1.check_position(1, 0, map1)) {pl1.animation_move(1,0);}
		if (pl1.check_position(1, 0, map1)) {
			pl1.move(1, 0);
		}
	} else if (keyCode === DOWN_ARROW) {
		//if (pl1.check_position(0, 1, map1)) {pl1.animation_move(0,1);}
		if (pl1.check_position(0, 1, map1)) {
			pl1.move(0, 1);
		}
	} else if (keyCode === UP_ARROW) {
		//if (pl1.check_position(0, -1, map1)) {pl1.animation_move(0,-1);}
		if (pl1.check_position(0, -1, map1)) {
			pl1.move(0, -1);
		}
    } else if (keyCode === ENTER) {
		//if (pl1.check_position(0, -1, map1)) {pl1.animation_move(0,-1);}
		console.log("enter was hit");
	}

}
