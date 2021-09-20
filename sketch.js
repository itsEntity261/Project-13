var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var orangeleaf,orangeleafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  orangeleafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background("green");
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;

  spawnApple();
  spawnLeaves();
  drawSprites();
  
  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0) {
    if(select_sprites == 1) {
      spawnApple();
    }
    else{
      spawnLeaves();
    }
  }
  
}

function spawnApple()  {
 
apple = createSprite(random(50,350),40,10,10);
apple.addImage("hi",appleImg);
apple.scale = 0.2
apple.velocityY=1
apple.lifetime = 200;
}
function spawnLeaves()  {

orangeleaf = createSprite(240,90,10,10);
orangeleaf.addImage("hello",orangeleafImg);
orangeleaf.scale = 0.1
}
                                                                                                               