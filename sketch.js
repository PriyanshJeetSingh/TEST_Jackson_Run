var path, power, bomb, energyDrink, coin, jackson;
var pathImg, powerImg, bombImg, coinImg, jackson_running

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  powerImg = loadImage("power.png");
  bombImg = loadImage("bomb.png");
  energyDrinkImg = loadImage("energyDrink.png");
  coinImg = loadImage("coin.png");
  jackson_running = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

    //path
    path = createSprite(200, 200)
    path.addImage(pathImg);
    path.velocityY = 4;
    path.scale = 1.2;

  //jackson
  jackson = createSprite(200, 350);
  jackson.addAnimation(jackson_running);
  jackson.x = World.mouseX
  
  //reset background
  if(path.y > 400){
    path.y = height/2;
  }

}

function draw() {
  background(0);

}
