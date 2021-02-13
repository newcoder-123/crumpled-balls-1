
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3
var paper
var ground


function setup() {
	createCanvas(1200,400);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		ground = new Ground(601,350,1202,10)
	dustbin1 = new Dustbin(1000,340,200,10)
	dustbin2 = new Dustbin(900,295,10,100)
	dustbin3 = new Dustbin(1100,295,10,100)
	paper = new Paper(200,300,25)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paper.display()
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-31})
	}
}



