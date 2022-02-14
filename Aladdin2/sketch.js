


function preload(){
  aladdin_img = loadImage("images/Aladdinstart.png");
  jafar_img = loadImage("images/Jafarstart.png")
  background_img = loadImage("images/Tunnel.jpg")
  red_img = loadImage("images/Gemred.png")
  blue_img = loadImage("images/Gemblue.png")
  yellow_img = loadImage("images/GemYellow .png")
  purple_img = loadImage("images/Gempurple.png")
  black_img = loadImage("images/Gemblack.png")
  necklace_img = loadImage("images/Necklace.png")


 
}

function setup() {
  createCanvas(500, 500);

  Background = createSprite(250, 250, 500, 500);
  Background.addImage(background_img);
  Background.velocityX = -2;

  Aladdin = createSprite(100, 100, 10, 10);
  Aladdin.addImage(aladdin_img);
  Aladdin.scale = 0.2;
  Jafar = createSprite(100, height - 100, 10, 10);
  Jafar.addImage(jafar_img);
  Jafar.scale = 0.3;
  
}

function draw(){
  background("black")

  if(Background.x<0){

    Background.x = 250;

  }
  if(frameCount%50 == 0){

    spawnred();
    spawnblue();
    spawnyellow();
    spawnpurple();
    spawnnecklace();
    spawnblack();

  }
  
 drawSprites();

}

function spawnred() {
  red = createSprite(500, Math.round(random(50,450)), 10, 10);
  red.addImage(red_img);
  red.scale = 0.1;
  red.velocityX = -2;

}

function spawnblue() {
  blue = createSprite(500, Math.round(random(50,450)), 10, 10);
  blue.addImage(blue_img);
  blue.scale = 0.1;
  blue.velocityX = -2;

}

function spawnyellow() {
  yellow = createSprite(500, Math.round(random(50,450)), 10, 10);
  yellow.addImage(yellow_img);
  yellow.scale = 0.1;
  yellow.velocityX = -2;

}

function spawnpurple() {
  purple = createSprite(500, Math.round(random(50,450)), 10, 10);
  purple.addImage(purple_img);
  purple.scale = 0.1;
  purple.velocityX = -2;

}

function spawnnecklace() {
  necklace = createSprite(500, Math.round(random(50,450)), 10, 10);
  necklace.addImage(necklace_img);
  necklace.scale = 0.1;
  necklace.velocityX = -2;

}

function spawnblack() {
  black = createSprite(500, Math.round(random(50,450)), 10, 10);
  black.addImage(red_img);
  black.scale = 0.1;
  black.velocityX = -2;

}