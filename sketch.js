function setup() {
  createCanvas(800,400);
  food= createSprite(random(10,370),random(10,370),20,20);
food.shapeColor="red";
snake=createSprite(200,200,20,20)
snake.shapeColor="white";
 text("SCORE: "+score,250,20);
}

function draw() {
  background(255,255,255);  
  food= createSprite(random(10,370),random(10,370),20,20);
food.shapeColor="red";
snake=createSprite(200,200,20,20)
snake.shapeColor="white";

snake.velocityX=3;
 text("SCORE: "+score,250,20); 
  
if(keyDown(UP_ARROW)){
     snake.setSpeedAndDirection(3,-90);
    }
    if(keyDown(DOWN_ARROW)){
      snake.setSpeedAndDirection(3,90);
    }
    if(keyDown(LEFT_ARROW)){
      snake.setSpeedAndDirection(3,180);
    }
    if(keyDown(RIGHT_ARROW)){
      snake.setSpeedAndDirection(3,0);
  }
  if(edge1.isTouching(snake)||edge2.isTouching(snake)
  ||edge3.isTouching(snake)||edge4.isTouching(snake)){
    gamestate="end";
   
  }
if(snake.isTouching(food)){
      food.x=Math.round(random(20,370));
      food.y=Math.round(random(20,370));
      score++;
    }

  var snakebody=[];

  var body=createSprite(200,200,20,20);
    body.shapeColor="white";
    snakebody.push(body);

for(i=snakebody.length-1;i>0;i--){
      snakebody[i].x=snakebody[i-1].x;
      snakebody[i].y=snakebody[i-1].y;
    }

   text("GAME OVER!!!",200,200);
 snake.setSpeedAndDirection(0,0);
  drawSprites();
}