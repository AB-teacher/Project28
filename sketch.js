
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mongo2,mango3,mango4,mango5;
var world,boy;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1050,200,30);
	mango2 = new Mango(1150,80,30);
	mango3 = new Mango(1275,150,30);
	mango4 = new Mango(1075,100,30);
	mango5 = new Mango(1200,250,30);
	treeObj=new Tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	stone = new Stone(230,400,30);

	sling = new SlingShot(stone.body,{x:220,y:380});
	Engine.run(engine);


}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  groundObject.display();
  stone.display();
  sling.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
}


function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    sling.fly();
}

function detectCollision(stoneObj,mangoObj){

  var stonePos = stoneObj.body.position;
  var mangoPos = mangoObj.body.position;
  var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
  if(distance <= stonePos.r + mangoObj.r){
    Matter.Body.setStatic(mangoObj,false);
  }
}