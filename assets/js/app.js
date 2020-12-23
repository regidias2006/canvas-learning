
var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');



const players = [{ id: 1, x: 0, y: 0, radius: 15, color: '#000FFF' }, { id: 2, x: 30, y: 10, radius: 15, color: '#000000' }]

var gravity = 0.2;
var sceneHeight = 500;
var sceneWidth = 500;

DrawScene();

function DrawScene() {

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var key in players) {

        var cir = new circle(players[key].x, players[key].y, players[key].radius, players[key].color);

    }
    requestAnimationFrame(DrawScene);  // makes call async
}


function GravityEngine(y_coordinate) {

    y_coordinate = FloorColision(y_coordinate);
    return y_coordinate += (gravity * 10);

}

function SceneColision(obj) {

    var dx = obj.x - sceneWidth;
    var dy = obj.y - sceneHeight;

    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < obj.radius) {
        // collision detected!
        
    }


    if (y_coordinate >= sceneHeight) {
        return y_coordinate = sceneHeight;
    }
    else {
        return y_coordinate;
    }

}


function circle(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
    context.closePath();
}


