var snake = [{x:10,y:10}];
var dir = {x:1,y:0}; var nextDir = {x:1,y:0};
var food = {x:5,y:5};
var phase = 'ready';

function start(){
  if(phase==='running') return;
  phase='running';
  loop();
}

function loop(){
  if(phase!=='running') return;
  dir = nextDir;
  var head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};
  
  if(head.x<0||head.x>=20||head.y<0||head.y>=20){phase='over'; alert('Game Over'); return;}
  
  snake.unshift(head);
  if(head.x===food.x && head.y===food.y){
    food = {x: Math.floor(Math.random()*20), y: Math.floor(Math.random()*20)};
  } else {
    snake.pop();
  }
  
  draw(snake, food);
  setTimeout(loop, 120);
}

draw(snake, food);
