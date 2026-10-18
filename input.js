// input.js - controls
document.addEventListener('keydown', handleKey);

var touchStartX = 0;
var touchStartY = 0;

document.addEventListener('touchstart', function(e){
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e){
  if(!touchStartX) return;
  var dx = e.changedTouches[0].clientX - touchStartX;
  var dy = e.changedTouches[0].clientY - touchStartY;
  
  if(Math.abs(dx) > Math.abs(dy)){
    if(dx > 20) nextDir = {x:1,y:0};
    else if(dx < -20) nextDir = {x:-1,y:0};
  } else {
    if(dy > 20) nextDir = {x:0,y:1};
    else if(dy < -20) nextDir = {x:0,y:-1};
  }
  touchStartX = 0;
});

function handleKey(e){
  // prevent opposite turn
  if(e.key==='ArrowUp' && dir.y!==1) nextDir={x:0,y:-1};
  if(e.key==='ArrowDown' && dir.y!==-1) nextDir={x:0,y:1};
  if(e.key==='ArrowLeft' && dir.x!==1) nextDir={x:-1,y:0};
  if(e.key==='ArrowRight' && dir.x!==-1) nextDir={x:1,y:0};
  
  if(e.key==='w' && dir.y!==1) nextDir={x:0,y:-1};
  if(e.key==='s' && dir.y!==-1) nextDir={x:0,y:1};
  if(e.key==='a' && dir.x!==1) nextDir={x:-1,y:0};
  if(e.key==='d' && dir.x!==-1) nextDir={x:1,y:0};
  }
