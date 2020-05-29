class player{
    constructor(_asset_path){

        this.asset = loadImage(_asset_path);
        this.position_x = 0;
        this.position_y = 0;
        this.scale = 1;

    }
    move(x, y){
        this.position_x += x * 50;
        this.position_y += y * 50;
    };
    scale(k ){
        this.scale *= k;
    };
    draw(){
        scale(this.scale);
        img(this.asset,this.position_x,this.position_y);
        scale(1/this.scale);
    };


}