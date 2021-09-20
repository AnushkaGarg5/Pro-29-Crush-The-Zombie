const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


 stones = []


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  base1 = new Base(0 , height-10,width*2,20)
  wall1 = new Base(width - 1300 , height-200,100,360)
  wall2 = new Base(width-300 , height-200,100,360)
  jointPoint = new Base(width-300 , height-350,40,20)
  bridge = new Bridge(25,{x:width-1300 , y:height-350})
  

  Matter.Composite.add(bridge.body ,jointPoint)
  link = new Links(bridge,jointPoint)

  for( var i =0 ; i<=8; i++){
  x = random(width/2-200 , width/2+300)
  y = random(-10,140)
  var stone = new Stone(x,y,40)
  stones.push(stone)
  }

  rectMode(CENTER)
}

function draw() {
  background(51);
  
  base1.show()
  wall1.show()
  wall2.show()
  jointPoint.show()
  bridge.show()
  //stone.display()

  for (var stone of stones) {
    
    stone.show();
  }

  
  Engine.update(engine);
 
  
  
}
