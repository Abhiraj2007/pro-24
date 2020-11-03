class paper{
    constructor(x, y,r) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.3,
            'density':1.2}
    this.x=x;
    this.y=y;
    this.r=r;
       this.body=Bodies.circle(this.x,this.y,this.r,options);
       World.add(world,this.body);
    }
     display(){
         var paperPosition = this.body.position;
         push();  
         translate(paperPosition.x,paperPosition.y) ;
         fill("purple");
         ellipseMode(RADIUS);
         ellipse(0,0,this.r,this.r); 
         pop();
        }
    }