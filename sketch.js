var girl;
var girlImg;
var backgroundImg;
var bg;
var tiger;
var tigerImg;

function preload(){
  girlImg = loadAnimation("Girl1.png","Girl2.png","Girl3.png","Girl4.png");

  backgroundImg = loadImage("Backround.png");

  tigerImg = loadAnimation("Tiger1.png","Tiger2.png","Tiger3.png","Tiger4.png","Tiger5.png")
}



function setup() {
  createCanvas(800,600);
  
  bg = createSprite(400,300,800,600);
  bg.addImage(backgroundImg);

  girl = createSprite(450, 500, 50, 50);
  girl.addAnimation("running",girlImg);
  girl.scale = 0.5;

  tiger = createSprite(200, 500, 50, 50);
  tiger.addAnimation("tiger_running",tigerImg);
  tiger.scale = 2;

}

function draw() {
  background("black");
  
  bg.velocityX = -3

  //reseting the background
  if(bg.x < 200){
    bg.x = bg.width/2
  }

  if(KeyDown ("space") ){
    girl.velocityY = -12  
  }
  drawSprites();

}