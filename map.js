class map {
	constructor(x, y) {
		this.map = [];
		this.cell_map = [];
		this.size_x = x;
		this.size_y = y;
	}

	init() {
		for (let i = 0; i < this.size_x * this.size_y; i++) {
			this.cell_map[i] = new cell();
		}
	}

	set(x, y, value) {
		//czy w zakresie
		if (x >= this.size_x || x < 0 || y >= this.size_y || y < 0) {
			console.error("map::set() map array out of bounds");
		} else {
			this.map[y * this.size_x + x] = value;
		}
	}
	get(x, y) {
		//czy w zakresie
		if (x >= this.size_x || x < 0 || y >= this.size_y || y < 0) {
			console.error("map::get() map array out of bounds");
		} else {
			return this.map[y * this.size_x + x];
		}
	}
	is_free(x, y) {
		if (this.map[(y / 50) * this.size_x + x / 50][2] == "0") {
			return true;
		} else {
			return false;
		}
	}
	load(arr) {
		//czy rozmiary sie zgadzaja
		for (let i = 0; i < arr.length && this.size_x; i++) {
			this.map = arr[i];
		}
	}
	draw_map() {
		//console.log("i am drawing a map")
		for (let x = 0; x < this.size_x; x++) {
			for (let y = 0; y < this.size_y; y++) {
				switch (this.map[y * this.size_x + x][0]) {
					case "0":
						//console.log("i am drawing a dirt")

						dirt.move_to(x, y);
						dirt.draw();
						break;
					case "1":
						//console.log("i am drawing a grass")

						grass.move_to(x, y);
						grass.draw();
						break;
				}
				switch (this.map[y * this.size_x + x][1]) {
					//case 0:

					//	break;
					case "1":
						dom.move_to(x, y);
						dom.draw();
						break;
					case "2":
						drzewo.move_to(x, y);
						drzewo.draw();
						break;
				}
			}
		}
	}
}

//TODO
/*

ladowanie danych z tablicy
jaki rodzaj pola w jakim miejscu

this.map.push("123")

*/
