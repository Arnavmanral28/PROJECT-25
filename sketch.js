
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var binImage;
var bin;
var paper;

function preload(){

     binImage = loadImage("dustbingreen.png")


}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(200,400,60);

	bin = createSprite(1200,550,10,10);
	bin.addImage(binImage);
	bin.scale = 0.9;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  paper.display();
  groundObject.display();
  dustbinObj.display();
  if(keyCode=== UP_ARROW){

	Matter.Body.applyForce(paper.body, paper.body.position, {x:25,y:-25});	
  }

  drawSprites();

}

