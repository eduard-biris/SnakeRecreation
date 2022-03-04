var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var p = document.getElementById("par");

var w=canvas.width;
var h=canvas.height;

var cw=w/100;
var ch=h/100;

var cap = {};
var corp = [];

document.onload = function(event){
  cap.x = 0;
  capy.y = 0;
  corp.push({x: 0, y:0});
}

console.log(cap, " ", corp);

ctx.fillStyle="#334466";
ctx.fillRect(cap.x, cap.y, cw, ch);

var n=corp.length;
for (let i=0; i<n; i++)
{
  ctx.fillStyle="#FFAA00";
  ctx.fillRect(corp[i].x, corp[i].y, cw, ch);
}


var dir=0;
document.onkeydown = function (event) {
  var key = event.keyCode;
  switch (key)
  {
    case 37: dir = 0; break;
    case 38: dir = 1; break;
    case 39: dir = 2; break;
    case 40: dir = 3; break;
  }
  p.innerHTML = dir;
}

switch (dir) {
  case 0:
    if(cap.x > 0)
    {
      cap.x-=1;
    }
    break;

  case 1:
    if(cap.y > 0)
    {
      cap.y-=1;
    }
    break;

  case 2:
    if(x < 100)
    {
      cap.x+=1;
    }
    break;

  case 3:
    if(cap.y < 100)
    {
      cap.y+=1;
    }
    break;
}
