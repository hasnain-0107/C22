class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canImg = loadImage("assets/canon.png");
    this.cbImg = loadImage("assets/cannonBase.png");
    
  }

  display(){
   push();
   imageMode(CENTER);
   image(this.canImg,this.x,this.y,this.width,this.height);
   pop(); 
   
   image(this.cbImg,70,20,200,200);
   noFill();
  }
}
