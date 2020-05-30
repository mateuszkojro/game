class object{
    constructor(){
        
        this.position_x = 0;
        this.position_y = 0;
        this.scale_factor = 1;
        this.transpa

    }

    move(x, y){
        let rel_x = this.position_x + x * 50;
        let rel_y = this.position_y + y * 50;
        if (rel_x <= width - 50 && rel_x >= 0){this.position_x = rel_x;}
        if (rel_y <= height - 50 && rel_y >= 0){this.position_y = rel_y;}
        console.log(this.position_x, this.position_y);
    }

    init(_asset_path){
        this.asset = loadImage(_asset_path);
    }
    move_to(x,y){
        if (x <= width && x >= 0){ this.position_x = x * 50;}
        if (y <= height && y >= 0){this.position_y = y * 50;}
    }
    check_position(x,y,in_map){
        let rel_x = this.position_x + x * 50;
        let rel_y = this.position_y + y * 50;
        return in_map.is_free(rel_x,rel_y)
    }
    scale_by(k ){
        this.scale_factor *= k;
    }
    resize_to(size_x , size_y){
            // resize to excact size
    }
    draw(){
        //scale(this.scale_factor);
        image(this.asset,this.position_x,this.position_y);
        //scale(1/this.scale);
    }
}
