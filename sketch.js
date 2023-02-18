
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject;	
var engine,world;


function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;
  paperObject= new paper(20,370,50)
  dustbinObj=new dustbin(850,380)
	groundObject=new ground(500,400,1000,10)
}


function draw() {

  background("skyblue");
  Engine.update(engine);
  paperObject.display()
  dustbinObj.display();
  groundObject.display()
 
}

function keyPressed(){
    if(keyCode === 32 ){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:120,y:-120})
      
     
    }
}


