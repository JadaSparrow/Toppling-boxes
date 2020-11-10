const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world , ball, ground;
var box1 , box2;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

ground = new Ground(200,385,400,10);
box1 = new Box(200,200,30,30);
box2 = new Box(220,200,30,30);

}
function draw() {
  background(0);  
  Engine.update(engine);

box1.display();
box2.display();
ground.display();

}