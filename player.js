class player{
    constructor(){

        this.position_x = 0;
        this.position_y = 0;
        this.scale_factor = 1;

    }
    init(_asset_path){
        this.asset = loadImage(_asset_path);
    }
    move(x, y){
        this.position_x += x * 50;
        this.position_y += y * 50;
    }
    scale_k(k ){
        this.scale_factor *= k;
    }
    draw(){
        scale(this.scale_factor);
        image(this.asset,this.position_x,this.position_y);
        //scale(1/this.scale);
    }
}