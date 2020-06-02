class player extends object{

constructor(){
    this.health  = 100;
    this.damage = 0;
    this.equiped = [];
    this.inventory = [];
}

give_damage(){
    let damage_to_give = this.damage;
    for (let i = 0 ; i < this.equiped.length ; i++){
        damage_to_give += this.equiped[i].attack;
    }
    return damage_to_give;
}
get_damage(value){
    let defence = 0;
    for (let i = 0 ; i < this.equiped.length ; i++){
        defence += this.equiped[i].defence;
    }
    this.health -= defence;
}
pick_up(map_element){
    if (map_element.is_pickable)this.inventory.push(map_element); // map::is_pickable is not implemented
    map_element.delete(); // to implement

}
drop(inventory_element){

}



}