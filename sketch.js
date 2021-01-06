const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var support;
var wreckingB

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,700,50,50);
    box2 = new Box(300,700,50,50);
    ground = new Ground(500,height,1000,200)

    support = new Support(100,400,400,21);
    wreckingB = new WreckingB(100,550,60,60);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    support.display();
    wreckingB.display();
}