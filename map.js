class map {

    constructor(x, y){
        this.map = [];
        this.size_x = x;
        this.size_y = y;
    }

    set(x,y,value){
        //czy w zakresie
        this.map[y*this.size_x + x] = value;
    }
    get(x,y){
        //czy w zakresie
        return this.map[y*this.size_x + x];
    }
    load(arr){
        //czy rozmiary sie zgadzaja
        for (let i = 0 ; i < arr.length && this.size_x   ; i++){
            this.map = arr[i];
        }
    }
	draw_map(){
        //console.log("i am drawing a map")
		for (let x = 0; x < this.size_x; x++){
        	for (let y = 0; y < this.size_y; y++){
        	    switch (this.map[y*this.size_x + x][0]) {
					case '0':
                        //console.log("i am drawing a dirt")

						dirt.move_to(x, y)
						dirt.draw();
						break;
					case '1':
                        //console.log("i am drawing a grass")

						grass.move_to(x, y)
						grass.draw();
						break;
				}
				switch (this.map[y*this.size_x + x][1]){
					//case 0:

					//	break;
                    case '1':
						dom.move_to(x, y)
						dom.draw();
						break;
					case '2':
						drzewo.move_to(x, y)
						drzewo.draw();
						break;
				}
			}
		}
    }
};

//TODO
/*

ladowanie danych z tablicy
jaki rodzaj pola w jakim miejscu


this.map.push("123")

*/