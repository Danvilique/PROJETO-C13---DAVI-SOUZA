var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){

  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  createRed();
  
  createOrange();
  
  createApple();

  drawSprites();
  
}


function createApple() {

if(frameCount % 60 === 0){
apple = createSprite(200, 200, 15, 15);
apple.addImage(appleImg);
// ALEATORIEDADE

apple.x = Math.round(random(50, 350))
apple.scale = 0.1;

apple.velocityY = 4;

apple.lifetime = 180;

 }
}

function createOrange() {

if(frameCount % 60 === 0){
orange = createSprite(200,200,15,15);
orange.addImage(orangeImg);
// ALEATORIEDADE

orange.x = Math.round(random(40,370));
orange.scale = 0.1;

orange.velocityY = 3;

orange.lifetime = 180;

}

}

function createRed() {

if(frameCount % 60 === 0){
red = createSprite(200,200,15,15);
red.addImage(redImg);
// ALEATORIEDADE

red.x = Math.round(random(55,330));
red.scale = 0.1;

red.velocityY = 5;

red.lifetime = 180;

}

}
