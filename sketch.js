var fixedRect,movingRect;
var spriteA,spriteB;


function setup() {
  createCanvas(800,400);
  
  fixedRect=createSprite(400, 200, 80, 50);
  movingRect=createSprite(400, 200, 60, 40);

  spriteA=createSprite(60,60,20,50);
  spriteB=createSprite(10,200,80,80);

  spriteA.velocityX=2;
  spriteA.velocityY=-3;

  spriteB.velocityX=-2;
  spriteB.velocityY=3;

  
}

function draw() {
  background(255,255,255);
  edges=createEdgeSprites();  
  
  movingRect .x=World.mouseX;
  movingRect.y= World.mouseY;

  movingRect.shapeColor="lavender";
  fixedRect.shapeColor="lavender";
 
  
  spriteA.bounceOff(edges);
  spriteB.bounceOff(edges);
  
  bounceOff(spriteA,spriteB);

  var x = isTouching(spriteA,spriteB);

   text (x,50,50);

   if (isTouching(movingRect,fixedRect)){

    movingRect.shapeColor="lightblue";
    fixedRect.shapeColor="lightblue";


   }
   else{

    movingRect.shapeColor="lavender";
    fixedRect.shapeColor="lavender";


   }

   if (isTouching(spriteA,spriteB)){

    colourChange("black","lightgreen");


   }
   else{

    colourChange("lightblue","red");

   }



  drawSprites();
}








  
