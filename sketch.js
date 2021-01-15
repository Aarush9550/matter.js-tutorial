const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var box, ball;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

    ground= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,ground);

    var options = {
        restitution: 0.8
    }

    var boxOptions = {
        restitution:1.0, friction: 0.03
    }

   box = Bodies.rectangle(100, 200, 10, 10, boxOptions);
   World.add(world, box);

   ball = Bodies.circle(300, 200, 5, options);
   World.add(world, ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    rectMode(CENTER);
    rect(box.position.x,box.position.y,10,10);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y, 5, 5);
}
