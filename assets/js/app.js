
var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');



const players = [
    { id: 1, x: 0, y: 0, radius: 15, color: '#000FFF', peso: 10, energy: 0.00, bounce: 0.5, collision: '' },
    { id: 2, x: 30, y: 28, radius: 15, color: '#000000', peso: 5, energy: 0.00, bounce: 0.5, collision: '' }
]

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

        if(players[key].collision == '' || players[key].energy <= 0.00)
        {
            players[key].y += (gravity * players[key].peso);
            players[key].energy += (gravity * players[key].peso)
            players[key].collision = '';

        }

        if(players[key].collision == 'Bottom' && players[key].energy >= 0.00)
        {
            players[key].y -= (gravity * ((players[key].peso)));
            players[key].energy -= (gravity * players[key].peso)
            console.log((gravity * (players[key].peso)), players[key].energy);
        }


        // if (players[key].energy == 0.00) {
        //     players[key].y += (gravity * players[key].peso);
        //     players[key].energy += (gravity * players[key].peso)
        // }
        // else {
        //     players[key].y -= (players[key].energy * players[key].peso);
        //     //players[key].energy = players[key].energy - (players[key].energy * players[key].peso)
        //     console.log(players[key].energy);
        // }

    }

}

function SceneColision(players) {

    for (var key in players) {

        var dx = sceneWidth - players[key].x;
        var dy = sceneHeight - players[key].y;

        var distance_y = Math.sqrt(dy * dy);

        if (distance_y <= players[key].radius) {
            // collision detected!

            players[key].collision = 'Bottom'
            players[key].energy = ((players[key].bounce * 100) * players[key].energy) / 100;

            players[key].y = sceneHeight - players[key].radius;

            // var i;
            // for (i = 0.00; i < players[key].energy; i++) {
            //     players[key].y = players[key].energy - i;
            //     console.log(players[key].energy - i);
            // }
            // console.log(players[key].energy);
            //players[key].energy = 0;
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


