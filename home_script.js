function start(){
  cap = {
    x : 12,
    y : 12
  };
  mancare = {
    x : Math.floor(Math.random() * 25),
    y : Math.floor(Math.random() * 25)
  };
  corp = [{x : 11, y : 12}];
  dir = -1;
  text = document.getElementById("par");
  cnv = document.getElementById("canvas");
  ctx = cnv.getContext("2d");
  max = 25;
  cw = cnv.width / max;
  ch = cnv.height / max;
  score = 0;
  go = setInterval(game, 100);
}

function retry()
{
  clearInterval(go);
  start();
}

function game() {

  document.onkeydown = function (event) {
    var key = event.keyCode;
    switch (key)
    {
      case 37: if(dir != 2) dir = 0; break;
      case 38: if(dir != 3) dir = 1; break;
      case 39: if(dir != 0) dir = 2; break;
      case 40: if(dir != 1) dir = 3; break;
    }

  }


  switch (dir) {
    case 0:
      if(cap.x > 0)
      {
        for(let i = 0; i < corp.length - 1; i++) {
          corp[i].x = corp[i+1].x;
          corp[i].y = corp[i+1].y;
        }
        corp[corp.length - 1].x = cap.x;
        corp[corp.length - 1].y = cap.y;
        cap.x-=1;
      }
      else {
        for(let i = 0; i < corp.length - 1; i++) {
          corp[i].x = corp[i+1].x;
          corp[i].y = corp[i+1].y;
        }
        corp[corp.length - 1].x = cap.x;
        corp[corp.length - 1].y = cap.y;
        cap.x = max - 1;
      }
      break;

    case 1:
      if(cap.y > 0)
      {
        for(let i = 0; i < corp.length - 1; i++) {
          corp[i].x = corp[i+1].x;
          corp[i].y = corp[i+1].y;
        }
        corp[corp.length - 1].x = cap.x;
        corp[corp.length - 1].y = cap.y;
        cap.y-=1;
      }
      else {
        for(let i = 0; i < corp.length - 1; i++) {
          corp[i].x = corp[i+1].x;
          corp[i].y = corp[i+1].y;
        }
        corp[corp.length - 1].x = cap.x;
        corp[corp.length - 1].y = cap.y;
        cap.y = max - 1 ;
      }
      break;

    case 2:
      if(cap.x < cnv.width / max)
      {
        for(let i = 0; i < corp.length - 1; i++) {
          corp[i].x = corp[i+1].x;
          corp[i].y = corp[i+1].y;
        }
        corp[corp.length - 1].x = cap.x;
        corp[corp.length - 1].y = cap.y;
        cap.x+=1;
      }
      else {
        for(let i = 0; i < corp.length - 1; i++) {
          corp[i].x = corp[i+1].x;
          corp[i].y = corp[i+1].y;
        }
        corp[corp.length - 1].x = cap.x;
        corp[corp.length - 1].y = cap.y;
        cap.x = 0;
      }
      break;

    case 3:
      if(cap.y < cnv.height / max)
      {
        for(let i = 0; i < corp.length - 1; i++) {
          corp[i].x = corp[i+1].x;
          corp[i].y = corp[i+1].y;
        }
        corp[corp.length - 1].x = cap.x;
        corp[corp.length - 1].y = cap.y;
        cap.y+=1;
      }
      else {
        for(let i = 0; i < corp.length - 1; i++) {
          corp[i].x = corp[i+1].x;
          corp[i].y = corp[i+1].y;
        }
        corp[corp.length - 1].x = cap.x;
        corp[corp.length - 1].y = cap.y;
        cap.y = 0;
      }
      break;

    }

  if(cap.x == mancare.x && cap.y == mancare.y) {
    mancare.x = Math.floor(Math.random() * max);
    mancare.y = Math.floor(Math.random() * max);
    corp.push( {x : corp[corp.length - 1].x, y : corp[corp.length - 1].y} );
    score++;
  }

  ctx.clearRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "#33CC88";
  for(let i = 0; i < corp.length; i++) {
    ctx.fillRect(corp[i].x * cw, corp[i].y * ch, cw, ch);
    if( (cap.x == corp[i].x) && (cap.y == corp[i].y) ) {
      dir = -1;
      alert("You ate yourself!");
      clearInterval(go);
    }
  }

  ctx.fillStyle = "#8844CC";
  ctx.fillRect(cap.x * cw, cap.y * ch, cw, ch);

  ctx.fillStyle = "#AA88AA";
  ctx.fillRect(mancare.x * cw, mancare.y * ch, cw, ch);

  text.innerHTML = "Score: " + score;

}
