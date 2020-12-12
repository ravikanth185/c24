const Engine=Matter.Engine
const World = Matter.World; 
const Bodies = Matter.Bodies; 
var engine,world,object;

function setup() {
  createCanvas(1200,400);
  engine=Engine.create()
  world=engine.world
 box1=new Box(700,320,70,70)
 box2=new Box (900,320,70,70)
 box3=new Box(900,240,70,70)
 box4=new Box(700,240,70,70)
 box5=new Box(800,180,70,70)
 ground=new Ground(600,390,1200,20)
 pig1=new Pig(800,350)
 pig2=new Pig(800,220)
 log1=new Log(800,280,300,PI/2)
 log2=new Log(800,200,300,PI/2)
 log3=new Log(750,140,150,PI/7)
 log4=new Log(850,140,150,-PI/7)
 bird1=new Bird(100,100)
}

function draw() {
  background(0);  
 Engine.update(engine)
 box1.display()
 box2.display()
 ground.display()
 pig1.display()
 log1.display()
 log2.display()
 box3.display()
 box4.display()
 pig2.display()
 log3.display()
 log4.display()
 box5.display()
 bird1.display()
}