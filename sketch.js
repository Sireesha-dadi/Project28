
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree;
var mango1,mango2,mango3,mango4,mango5,mango6;
var boy, stone, hand,chainlink;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

tree = new Tree(500,400);
ground = new Ground(400,690,800,20);

mango1= new Mango(420,350);
mango2= new Mango(500,250);
mango3= new Mango(620,300);
mango4= new Mango(320,270);
mango5= new Mango(600,150);
mango6= new Mango(420,150);

stone = new Stone(85,530);
	Engine.run(engine);

 

 
  chainlink = new SlingShot(stone.body,{x:85,y:530});

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  
  tree.display();
  ground.display();
  image(boy ,50,460,200,300);
  stone.display();


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  chainlink.display();

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}


function mouseReleased(){
  chainlink.fly();
  
}


