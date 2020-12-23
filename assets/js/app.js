
var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');

// context.clearRect(0, 0, canvas.width, canvas.height);

const players = [{id:1, x:0, y:0, radius: 15, color: '#000FFF'}, {id:2, x:30, y:10, radius: 15, color: '#000000'}]

for(var key in players)
{
    var cir = new circle(players[key].x, players[key].y, players[key].radius, players[key].color);

    requestAnimationFrame(recursiveFunction);  // makes call async
}




//invoking the object
// var cir = new circle(30, 30, 15, '#000FFF');

function circle(x, y, radius, color){
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI*2);
    context.fillStyle = color;
    context.fill();
    context.closePath();
  }


  