class Paper{
    constructor(x, y,radius) {
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2,
        
      }
      this.x = x
      this.y = y
      this.radius = radius
      this.body = Bodies.circle(this.x, this.y, 30, options);
      this.image = loadImage ("paper.png")
      
      World.add(world, this.body);
    
    }
    display()
        {
        var paperpos = this.body.position;
        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER);
        fill("white")
        image(this.image,0-15,0-15,this.radius,this.radius);
        
        pop()
}
}