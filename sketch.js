
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
cont Render = Matter.Render;
const Constraint = Mattere.Constraint

function preload()
{
	
}

function setup(){
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Roof = new roof(400,100,550,20)
ball1 = new ball(200,500,80)
chain1 = new chain(ball1.body, Roof.body, -200, 0)
ball2 = new ball(280,500,80)
chain2 = new chain(ball2.body, Roof.body, -120, 0)
ball3 = new ball(360,500,80)
chain3 = new chain(ball3.body, Roof.body, -40, 0)
ball4 = new ball(440,500,80)
chain4 = new chain(ball4.body, Roof.body, 40, 0)
ball5 = new ball(520,500,80)
chain5 = new chain(ball5.body, Roof.body, 120, 0)
ball6 = new ball(600,500,80)
chain6 = new chain(ball6.body, Roof.body, 200, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(247,249,249));
  
Roof.display();
chain1.display();
ball1.display();
chain2.display();
ball2.display();
chain3.display();
ball3.display();
chain4.display();
ball4.display();
chain5.display();
ball5.display();
chain6.display();
ball6.display();



  drawSprites();
 
}



