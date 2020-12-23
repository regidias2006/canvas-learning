
var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');



const players = [{ id: 1, x: 0, y: 0, radius: 15, color: '#000FFF', peso: 10, energy: 0 }, { id: 2, x: 30, y: 28, radius: 15, color: '#000000', peso: 5, energy: 0 }]

var gravity = 0.2;
var sceneHeight = 500;
var sceneWidth = 500;

DrawScene();

function DrawScene() {

    context.clearRect(0, 0, canvas.width, canvas.height);


    for (var key in players) {

        
        GravityEngine(players);
        SceneColision(players);

        var cir = new circle(players[key].x, players[key].y, players[key].radius, players[key].color);

    }
    requestAnimationFrame(DrawScene);  // makes call async
}


function GravityEngine(players) {

    for (var key in players) {
        players[key].y += (gravity * players[key].peso);
    }

}

function SceneColision(players) {

    for (var key in players) {

        var dx = sceneWidth - players[key].x;
        var dy = sceneHeight - players[key].y;
    
        var distance = Math.sqrt( dy * dy);

        if (distance <= players[key].radius) {
            // collision detected!
            console.log();
            players[key].y = sceneHeight - players[key].radius;
        }
    }

}


function circle(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
    context.closePath();
}


