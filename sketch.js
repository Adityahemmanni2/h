var canvas;
var music;
var ball;
var wall1,wall2,wall3,wall4;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(400,400);
    wall1=createSprite(40,395,100,20);
    wall2=createSprite(150,395,100,20);
    wall3=createSprite(260,395,100,20);
    wall4=createSprite(370,395,100,20);

    ball=createSprite(36,92,20,20);
    ball.x=World.mouseX
    ball.y=World.mouseY
}
function draw(){
    background("white");
    wall1.shapecolor="Red";
    wall2.shapecolor="Green";
    wall3.shapecolor="Yellow";
    wall4.shapecolor="Blue";

if(ball.isTouching(wall1)){
ball.shapecolor="Red";
}
if(ball.isTouching(wall2)){
    ball.shapecolor="Green";
    }
    if(ball.isTouching(wall3)){
        ball.shapecolor="Yellow";
        }
        if(ball.isTouching(wall4)){
            ball.shapecolor="Blue";
            }
drawSprites();
        }
