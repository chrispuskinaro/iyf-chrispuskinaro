var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 400; canvas.height = 400;
var grid = 20;

function draw(snake, food){
  ctx.fillStyle = '#222'; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'red'; ctx.fillRect(food.x*grid, food.y*grid, grid-2, grid-2);
  ctx.fillStyle = 'lime';
  snake.forEach(s => ctx.fillRect(s.x*grid, s.y*grid, grid-2, grid-2));
}
