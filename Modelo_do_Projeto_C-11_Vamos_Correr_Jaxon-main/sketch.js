var path, pathimg, runner, runnerimg, limiteEsq, limiteDir;
function preload(){
  //imagens pré-carregadas
  pathimg = loadImage("path.png");
  runnerimg=loadAnimation("Runner-1.png", "Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  path = createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY = 4;
  path.scale = 1.2;
runner=createSprite(200,200);
runner.addAnimation("correndo",runnerimg);
runner.scale=0.1;
limiteEsq=createSprite(35,150,20,500);
limiteDir=createSprite(370,200,20,500);
limiteDir.visible=false;
limiteEsq.visible=false;
}

function draw() {
  background(0);
if (path.y > 400){
  path.y = height/2;
}
runner.x=World.mouseX;
createEdgeSprites();
runner.collide(limiteEsq);
runner.collide(limiteDir);
drawSprites();
}
