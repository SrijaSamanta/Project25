
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paperObject;
var bin,binImage,wall1,wall2,wall3;

function preload(){
	binImage=loadImage("sprites/dustbingreen.png");

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin=createSprite(1100,570,20,20);
	bin.addImage(binImage);
	bin.scale=0.45;

	ground = new Ground(width/2,650,width,20);

	paperObject = new Paper(200,460,40);

	wall1 = new Dustbin(1100,630,120,20);
	wall2 = new Dustbin(1170,565,20,150);
	wall3 = new Dustbin(1030,565,20,150);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  
  //keyPressed();
  paperObject.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:84,y:-84});
	}
}



