class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibility = 255;
    }
    display(){
if(this.body.speed<5){
super.display();
}
else{
World.remove(world,this.body);
push();
this.Visibility = this.Visibility -5;
//tint(255,this.Visibility);
//rect(0, 0, this.width, this.height);
pop();
}

    }

    score(){
      if (this.Visiblity === 0 ){
        score++;
      }
    }
};
  