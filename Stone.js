class Stone {

    constructor(x,y){
        
        var options = {
            'density':1.2,
            'friction': 10.0,
            'restitution':0,
            'isStatic': false
          };
          this.body = Bodies.rectangle(x, y, 60, 60, options);
          this.width = 60;
          this.height = 60;
          this.image= loadImage("stone.png");
        
          World.add(world, this.body);
        

    }

    
    display(){

       
        var pos = this.body.position;    
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height);
        pop();
        
      };
}