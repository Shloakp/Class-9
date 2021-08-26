
var box;

function setup() {
  createCanvas(400,400);
box = createSprite(200,200,50,50);
}

function draw() 
{
background("black");


if(keyDown("RIGHT_ARROW")){
box.x += 2;
}

if(keyDown("LEFT_ARROW")){
  box.x -=2;
}

if(keyDown("UP_ARROW")){
  box.y -= 2;
}

if(keyDown("DOWN_ARROW")){
  box.y +=2;
}



drawSprites();


}




