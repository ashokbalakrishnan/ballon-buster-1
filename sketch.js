var backgroundImage;
var redBalloonImg,redBalloon ;
var blueBalloonImg,blueBalloon;
var greenBalloonImg,greenBalloon;
var pinkBalloonImg,pinkBalloon;
var bow,bowImg;
var arrow,arrowImg;

function preload(){
 //load your images here 
 backgroundImage=loadImage("background0.png")
redBalloonImg=loadImage("red_balloon0.png")
blueBalloonImg=loadImage("blue_balloon0.png")
greenBalloonImg=loadImage("green_balloon0.png")
pinkBalloonImg=loadImage("pink_balloon0.png")
bowImg=loadImage("bow0.png")
arrowImg=loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
  background=createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale=2.5;
  
  bow=createSprite(300,200,10,50)
  bow.addImage(bowImg);

  
  
 
  
  for(var k=180;k<300;k=k+60){
    
  greenBalloon=createSprite(140,k,1,1)
  greenBalloon.addImage(greenBalloonImg)
  greenBalloon.scale=0.1;
    
  
    
    
  }
  
  for(var l=150;l<270;l=l+60)
      {
   pinkBalloon=createSprite(170,l,1,1)
  pinkBalloon.addImage(pinkBalloonImg)
  pinkBalloon.scale=1.2;
  }
  
  
  //add code here
  
}

function draw() {
drawSprites();
background.velocityX=-3;
  
createArrow();
if (background.x<0){
    background.x= background.width/2;
    }
  
  bow.y=mouseY
  var select=Math.round(random(1,4))
  if(frameCount%60===0){
     if(select===1){
       createRed();
        
        
        }
     
    
     if(select===2){
        
        createBlue();
        
        }
     }

  
  //add code here
  
}

function createArrow(){

if(keyDown("space")){
   
  arrow=createSprite(300,200,10,10)
  arrow.addImage(arrowImg)
  arrow.scale=0.3
  arrow.velocityX=-3
  arrow.y=bow.y
   }





}

function createRed(){
  redBalloon=createSprite(0,Math.round(random(20,370)),1,1);
  redBalloon.addImage(redBalloonImg);
  redBalloon.scale=0.1;
  redBalloon.velocityX=3
  redBalloon.lifetime=150
  
}



function createBlue(){


  
  blueBalloon=createSprite(0,Math.round(random(20,400)),1,1)
  blueBalloon.addImage(blueBalloonImg)
  blueBalloon.scale=0.1;
  blueBalloon.velocityX=3
  blueBalloon.lifetime=150
}