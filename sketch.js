
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyimg, treeimg
function preload()
{
	boyimg= loadImage("images/boy.png");
	treeimg= loadImage("images/tree.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(650,580,1300,20);
	mango1= new Mango(916,282,30);
	mango2= new Mango(962,238,30);
	mango3= new Mango(1099,273,30);
	mango4= new Mango(1227,287,30);
	stone= new Stone(235,420,30);
	sling= new Slingshot(stone.body,{x:235, y:420})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boyimg,200,350,200,300);
  image(treeimg,800,100,500,500);
  text(mouseX+","+mouseY,mouseX,mouseY);
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone.display();
  sling.display();
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed() {
    if(keyCode===32) {
        sling.attach(stone.body);
    }
}

function detectCollision(lstone,lmango){ 
	mangoBodyPosition=lmango.body.position 
	stoneBodyPosition=lstone.body.position 
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
	if(distance<=lmango.radius+lstone.radius);
	{ 
		Matter.Body.setStatic(lmango.body,false); 
	} }

