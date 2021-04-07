const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground1;
var snake1;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(600,height,1200,20);
  snake1 = new snake(50,370,50,50);
}

function draw() {
  background(5,255,255);  
  Engine.update(engine);
    strokeWeight(4);


  snake1.display();
  ground1.display();
}
function keyPressed(){
  if(keyIsDown(RIGHT_ARROW)){
    snake1.body.position.x=snake1.body.position.x+1;
  }
  if(keyIsDown(LEFT_ARROW)){
    snake1.body.position.x=snake1.body.position.x-1;
  }
   
}