var movingrect, fixedrect;
function setup() {
  createCanvas(800,400);

  movingrect=createSprite(300,200,50,200);
  movingrect.shapeColor=("red");
  movingrect.debug=true;
  fixedrect=createSprite(200,200,200,50);
  fixedrect.shapeColor=("red");
  fixedrect.debug=true;
}
function draw() {
  background("black");  
movingrect.x=World.mouseX;
movingrect.y=World.mouseY;
console.log("a="+(fixedrect.width/2 + movingrect.width/2));
console.log("b="+(movingrect.x-fixedrect.x));
if(fixedrect.width/2 + movingrect.width/2 > movingrect.x-fixedrect.x && fixedrect.width/2 + movingrect.width/2 > fixedrect.x-movingrect.x && fixedrect.height/2 + movingrect.height/2 > movingrect.y-fixedrect.y  && fixedrect.height/2 + movingrect.height/2 > fixedrect.y-movingrect.y ) {
  movingrect.shapeColor=("blue");
  fixedrect.shapeColor=("blue");
}else{
  movingrect.shapeColor=("red");
  fixedrect.shapeColor=("red");
}
  drawSprites();
}