var playerRunning,player;
var goldCoin,goldimage,silverCoin,silverimage,bronzeCoin,bronzeimage;
var obstacle,obstacle1,obstacle2,obstacle3;
var treasure,treasureimage,burger,burgerimage;
var backgroundimage,background1,trackimage;
var PLAY = 1;
var END = 0;
var GameState=PLAY;
var score=0;
var ObstaclesGroup,goldCoinGroup,silverCoinGroup,bronzeCoinGroup;


function preload(){
  //playerRunning=loadAnimation("images/boy running1 .jpg ", "boy running2 .jpg");
  playerRunning=loadImage("images/boyrunningtesting.png");
  goldimage=loadImage("images/coin_gold.png");
  silverimage=loadImage("images/coin_silver.png");
  bronzeimage=loadImage("images/coin_bronze.png");
 // backgroundimage=loadAnimation("images/trackimage2testing3.png","images/trackimagetestingstage.png");
  backgroundimage=loadImage("images/trackimage2testing3.png");
  obstacle1=loadImage("images/rock1.png");
  obstacle2=loadImage("images/rock2.png");
  obstacle3=loadImage("images/obs.png");
  obstacle4=loadImage("images/tvobstacle.png");
  obstacle5=loadImage("images/mysteryboxtest1.jpg");
  
}

function setup(){
   createCanvas(400,600); 
  
  background1=createSprite(+20,-20,500,700);
  background1.y=background1.height/2;
  background1.velocityY=0.7;
  background1.addImage(backgroundimage);

  //background1.addAnimation("track",backgroundimage);
  background1.scale=0.8;    


  player = createSprite(150,500,20,40);
  player.addImage(playerRunning);
  player.scale=0.6;

  
  
  ObstaclesGroup=new Group();
  goldCoinGroup=new Group();
  silverCoinGroup=new Group();
  bronzeCoinGroup=new Group();
  mysteryBoxGroup=new Group();

}
function draw(){
  background(0);

    if(GameState===PLAY){
      if(background1.y>400){
        background1.y=background1.height/4;

      }

      if(goldCoinGroup.isTouching(player)){
        goldCoinGroup.destroyEach();
        score=score+30;

      }
      if(silverCoinGroup.isTouching(player)){
        silverCoinGroup.destroyEach();
        score=score+20;

      }
      if(bronzeCoinGroup.isTouching(player)){
        bronzeCoinGroup.destroyEach();
        score=score+10;

      }

      if(mysteryBoxGroup.isTouching(player)){
        mysteryBoxGroup.destroyEach();
        score=score+Math.round(random(200,500));
      }



      if(keyDown(LEFT_ARROW)){
        player.x=player.x-5;
      }
      if(keyDown(RIGHT_ARROW)){
        player.x=player.x+5;
      }



      if(ObstaclesGroup.isTouching(player)){
        GameState=END;
      }


      mysteryBox1();
      spawnobstacles();
      gold();
      silver();
      bronze();


      
    }
    else if(GameState===END){
      background1.velocityY=0;
      player.velocityY=0;
      ObstaclesGroup.setVelocityYEach(0);
      goldCoinGroup.setVelocityYEach(0);
      silverCoinGroup.setVelocityYEach(0);
      bronzeCoinGroup.setVelocityYEach(0);
      mysteryBoxGroup.setVelocityYEach(0);

      ObstaclesGroup.setLifetimeEach(-1);
      goldCoinGroup.setLifetimeEach(-1);
      silverCoinGroup.setLifetimeEach(-1);
      bronzeCoinGroup.setLifetimeEach(-1);
      mysteryBoxGroup.setLifetimeEach(-1);


    }

  drawSprites();
  text("Score : "+ score,300,100 );

}

function gold(){
  if(World.frameCount%210===0 ){
    goldCoin=createSprite(150,50,20,20);
    goldCoin.addImage(goldimage);
    goldCoin.velocityY=3;
    goldCoin.lifetime=200;
    goldCoin.x=Math.round(random(30,370));
    goldCoin.scale=0.7;
    goldCoinGroup.add(goldCoin);

  }
}

function silver(){
  if(World.frameCount%150===0 ){
    silverCoin=createSprite(150,50,20,20);
    silverCoin.addImage(silverimage);
    silverCoin.velocityY=3;
    silverCoin.lifetime=200;
    silverCoin.x=Math.round(random(30,370));
    silverCoin.scale=0.7;
    silverCoinGroup.add(silverCoin);


  }
}

function bronze(){
  if(World.frameCount%90===0 ){
    bronzeCoin=createSprite(150,50,20,20);
    bronzeCoin.addImage(bronzeimage);
    bronzeCoin.velocityY=3;
    bronzeCoin.lifetime=200;
    bronzeCoin.x=Math.round(random(30,370));
    bronzeCoin.scale=0.7;
    bronzeCoinGroup.add(bronzeCoin);

  }
}

function mysteryBox1(){
  if(World.frameCount%250===0){
    mysteryBox=createSprite(random(80,300),10,20,20);
  mysteryBox.addImage(obstacle5);
  mysteryBox.scale=0.3;
  mysteryBox.velocityY=3;
  mysteryBoxGroup.add(mysteryBox);
  }
}

function spawnobstacles(){
  if(World.frameCount%80===0){
    var obstacles = createSprite(random(25,375),10,20,20);
    obstacles.velocityY=3;
    obstacles.lifetime=200;
    var rand=Math.round(random(1,4));
    obstacles.scale=0.3;
    switch(rand){
      
      case 1: obstacles.addImage(obstacle1);
      break;
      case 2: obstacles.addImage(obstacle2);
      break;
      case 3: obstacles.addImage(obstacle3);
      break;
      case 4  : obstacles.addImage(obstacle4);
      break;
      
      default:break;


  }
  ObstaclesGroup.add(obstacles);


  }

}
