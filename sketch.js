const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;
var backgroundImg, ground;
var polygon, slingshot;
var gameState="OnSling"


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    polygon=new Polygon(200,200, 20);
    
    block1=new Block(300,275,30,40);
    block2=new Block(330,275,30,40);
    block3=new Block(360,275,30,40);
    block4=new Block(390,275,30,40);
    block5=new Block(420,275,30,40);
    block6=new Block(450,275,30,40);
    block7=new Block(480,275,30,40);

    block8=new Block(330,235,30,40);
    block9=new Block(360,235,30,40);
    block10=new Block(390,235,30,40);
    block11=new Block(420,235,30,40);
    block12=new Block(450,235,30,40);

    block13=new Block(360,195,30,40);
    block14=new Block(390,195,30,40);
    block15=new Block(420,195,30,40);

    block16=new Block(390,155,30,40);

    ground=new Ground(390,320,300,20);
    slingshot=new SlingShot(polygon.body, {x: 200, y: 200})


}

function draw(){
    background(0);
    Engine.update(engine);
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
    ground.display();
    polygon.display();
    slingshot.display();
    drawSprites();
}

function mouseDragged(){
    if(gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
        gameState="OnSling"
    }
}