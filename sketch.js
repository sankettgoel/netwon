
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint



function preload()
{
	
}

function setup()
 {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	roof= new base(400,200,400,20)
	ball1= new balls(225,500,80)
	ball2= new balls(325,500,80)
	ball3= new balls(425,500,80)
	ball4= new balls(525,500,80)
	ball5= new balls(625,500,80)
    rope1= new strings(225,500,30,200)








}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  roof.display()	
  ball1.display()	
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  rope1.display()
}



