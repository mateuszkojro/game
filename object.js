class object {
	constructor() {
		this.position_x = 0;
		this.position_y = 0;
		this.scale_factor = 1;
		this.transpa;
		this.anim = 1;
		this.x_site;
		this.y_site;
		this.anim_counter;
	}

	move(x, y) {
		let rel_x = this.position_x + x * 50;
		let rel_y = this.position_y + y * 50;
		if (rel_x <= width - 50 && rel_x >= 0) {
			this.position_x = rel_x;
        }
        else{
            console.error("object::move x value out of bounds");
        }
		if (rel_y <= height - 50 && rel_y >= 0) {
			this.position_y = rel_y;
        }
        else{
            console.error("object::move y value out of bounds");
        }
		console.log(this.position_x, this.position_y);
	}

	animation() {
		if (this.anim == 1) {
			this.anim_counter = 1;
			this.anim = 2;
		}
		if (this.anim == 2) {
			if (this.anim_counter <= 50) {
				this.position_x += this.x_site;
				this.position_y += this.y_site;
				this.anim_counter++;
			} else {
				this.anim = 0;
			}
		}
	}

	animation_move(x, y) {
		this.anim = 1;
		this.x_site = x;
		this.y_site = y;
		/*
        let rel_x = this.position_x + x * 50;
        let rel_y = this.position_y + y * 50;
        if (rel_x <= width - 50 && rel_x >= 0){//this.position_x = rel_x;
            for (let i = 1; i <= 50; i++){
                this.position_x = this.position_x + (x * 1);
            }
        }
        if (rel_y <= height - 50 && rel_y >= 0){
            for (let i = 1; i <= 50; i++){
                this.position_y = this.position_y + (y * 1);
            }
        }
        */
		console.log(this.position_x, this.position_y);
	}

	init(_asset_path) {
		this.asset = loadImage(_asset_path);
	}
	move_to(x, y) {
		if (x <= width && x >= 0) {
			this.position_x = x * 50;
		}
		if (y <= height && y >= 0) {
			this.position_y = y * 50;
		}
	}
	check_position(x, y, in_map) {
		let rel_x = this.position_x + x * 50;
		let rel_y = this.position_y + y * 50;
		return in_map.is_free(rel_x, rel_y);
	}
	scale_by(k) {
		this.scale_factor *= k;
	}
	scale_to(k) {
		this.scale_factor = k;
	}
	resize_to(size_x, size_y) {
		// resize to excact size
	}
	draw() {
		scale(this.scale_factor);
		image(this.asset, this.position_x, this.position_y);
		scale(1 / this.scale_factor);
	}
}
