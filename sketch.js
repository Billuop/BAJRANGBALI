
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,jamin
var play = 0
var End = 1
var gamestate = play
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (600,600)
  monkey= createSprite(200,500,20,20)
monkey.addAnimation("langorkaangoor",monkey_running)
  monkey.scale = 0.2
  jamin = createSprite(300,580,1200,20)
  jamin.velocityX = -5
  kelaram = new Group()
  ravan = new Group()
  score = 0
}


function draw() {
background("white")
  sadakelahuaakela()
   whjrbakwasha()
  text("score"+score,100,100)
  if(monkey.isTouching(kelaram))
    {
      score = score + 1
      kelaram.destroyEach()
    }
  
  if(monkey.isTouching(ravan))
    {
     //Jaishreeram
      gamestate= End
    }
  
 if(jamin.x<0)
   {
  jamin.x = 300
   
   }
  
  if(keyDown("space"))
  {
    monkey.velocityY = -10
    
  }
  
  monkey.velocityY+= 0.5
  
  monkey.collide(jamin)
  if(gamestate===End)
    {
      background("black")
      textSize(50)
      fill("white")
      text("Loooooooooser😂😡",50,300)
      ravan.destroyEach()
      kelaram.destroyEach()
      monkey.destroy()
      
      
    }
  drawSprites()
}

function sadakelahuaakela()
{
  if(frameCount%80===0)
  {
    kela = createSprite(600,500,20,600)
    kela.addImage(bananaImage)
    kela.velocityX = -5
    kela.scale = 0.1
    kelaram.add(kela)
  }
  
  
}


function whjrbakwasha()
{
  if(frameCount%200===0)
  { dushman = createSprite(600,550,20,600)
    dushman.addImage(obstaceImage)
    dushman.velocityX = -5
    dushman.scale = 0.2
    ravan.add(dushman)
  }
  
  
}

