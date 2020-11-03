
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinSide1,dustbinSide2,dustbinSide3,ball,ground,paperObject;

function preload(){

	
}

function setup() {
	createCanvas(800, 700);
	 //dustbinSide1=createSprite(550,550,20,100);
	 //dustbinSide1.shapeColor=color(255,0,0);
	 //dustbinSide2=createSprite(600,600,100,20);
	 //dustbinSide2.shapeColor=color(255,0,0);
     //dustbinSide3=createSprite(650,550,20,100);
	 //dustbinSide3.shapeColor=color(255,0,0);
     //ground=createSprite(300,620,800,20);
     
     
	engine = Engine.create();
	world = engine.world;
	paperObject = new paper(20,615,20);
	
	//Create the Bodies Here.
    ground = Bodies.rectangle(400, 620 , 800 ,20, { isStatic:true});
	World.add(world, ground);
	
	dustbinSide1 = Bodies.rectangle(550,550,20,100,{isStatic:true});
	World.add(world,dustbinSide1);

	dustbinSide2 = Bodies.rectangle(600,600,100,20,{isStatic:true});
	World.add(world,dustbinSide2);

	dustbinSide3 = Bodies.rectangle(650,550,20,100,{isStatic:true});
	World.add(world,dustbinSide3);


	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,800,20)
 paperObject.display();
 rectMode(CENTER);
 rect(dustbinSide1.position.x,dustbinSide1.position.y,20,100)
 rect(dustbinSide2.position.x,dustbinSide2.position.y,100,20) 
 rect(dustbinSide3.position.x,dustbinSide3.position.y,20,100)



  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-85})
	}
}


