var canvas;
var music;
var ball, block, block1, block2, block3;
var surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(775,600);

    //create 4 different surfaces
ball = createSprite(random(20, 750), 100, 25, 25);
ball.shapeColor = "white";
ball.velocityY = 5;
ball.velocityX = 5;

block = createSprite(150, 580, 150, 10);
block.shapeColor = "blue";

block1 = createSprite(300, 580, 150, 10);
block1.shapeColor = "green";

block2 = createSprite(450, 580, 150, 10);
block2.shapeColor = "yellow";

block3 = createSprite(600, 580, 150, 10);
block3.shapeColor = "red";

surface1 = createSprite(0, 300, 5, 700);
surface1.shapeColor = "red";

surface2 = createSprite(387, 600, 800, 5);
surface2.shapeColor = "red";

surface3 = createSprite(775, 300, 5, 700);
surface3.shapeColor = "red";

surface4 = createSprite(387, 0, 800, 5);
surface4.shapeColor = "red";
    //create box sprite and give velocity

}

function draw() {
    background (rgb(500, 100, 200));
    //create edgeSprites

   if (ball.isTouching(block)){
       ball.shapeColor = "blue";
   }

   if (ball.isTouching(block1)){
       ball.shapeColor = "green";
   }

   if (ball.isTouching(block2)){
       ball.shapeColor = "yellow";
       music.play();

}

   if (ball.isTouching(block3)){
       ball.shapeColor = "red";
       music.play();
}

createEdgeSprites();
ball.bounceOff(block);
ball.bounceOff(block1);
ball.bounceOff(block2);
ball.bounceOff(block3);
ball.bounceOff(surface1);
ball.bounceOff(surface2);
ball.bounceOff(surface3);
ball.bounceOff(surface4);


drawSprites();
    //add condition to check if box touching surface and make it box
}
