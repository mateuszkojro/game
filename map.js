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
        for (var i = 0 ; i < arr.length && this.size_x   ; i++){
            this.map = arr[i];
        }
    draw_map()
        for (var i = 0; i < this.map.length(); i++){
            switch (this.map[i][0]) {
				case 0:
					image(grass, x*50, y*50);
					break;
				case 1:
					image(dirt, x*50, y*50);
					break;
			}
			switch (this.map[i][1]){
				//case 0:
					
				//	break;
				case 1:
					image(dom, x*50, y*50);
					break;
				case 2:
					image(drzewo, x*50, y*50);
					break;
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