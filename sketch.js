var dog, dogImg, happyDog, happyDogImg;
var database;
var foodS, foodStock;

function preload()
{
	dogImg = loadImage("sprites/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
dog = createSprite(250, 250, 110, 10);
dog.addImage(dogImg);

}


function draw() {  

  drawSprites();
  

}



