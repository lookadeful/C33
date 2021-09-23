
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5, roofObject
var rope1,rope2,rope3,rope4,rope5;
var world;
var ground


function setup() {
	createCanvas(1000, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	roofObject=new roof(400,0,230,20);
	bob1 = new bob(520,475,70)
	ground = new roof(500, 600, width, 10)

	block1 = new block(100, 400, 70, 70)
	block2 = new block(100, 365, 70, 70)
	block3 = new block(100, 330, 70, 70)
	block4 = new block(100, 295, 70, 70)
	block5 = new block(100, 260, 70, 70)

	block6 = new block(600, 400, 70, 70)
	block7 = new block(600, 365, 70, 70)
	block8 = new block(600, 330, 70, 70)
	block9 = new block(600, 295, 70, 70)
	block10 = new block(600, 260, 70, 70)
	block11 = new block(600, 225, 70, 70)

	block12 = new block(25, 400, 70, 70)
	block13 = new block(25, 365, 70, 70)
	block14 = new block(25, 330, 70, 70)

	block15 = new block(670, 400, 70, 70)
	block16 = new block(670, 365, 70, 70)
	block17 = new block(670, 330, 70, 70)
	block18 = new block(670, 295, 70, 70)
	block19 = new block(670, 260, 70, 70)
	block20 = new block(670, 225, 70, 70)
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  ground.display();
  bob1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  block12.display();
  block13.display();
  block14.display();

  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
}

function keyPressed() {
	if(keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-70, y:-75})
	}	

	if(keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:70, y:-75})
	}	
}	