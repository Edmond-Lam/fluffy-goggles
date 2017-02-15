var canvas = document.getElementById("thing").getContext("2d");


var addRectangle = function(e){
    var c = document.getElementById("thing")
    var canvas = c.getContext("2d");
    var X = e.offsetX;
    var Y = e.offsetY;
    var X1 = X - 5;
    var Y1 = Y - 5;
    canvas.fillStyle = "#0000FF";
    canvas.fillRect(X1, Y1, 10, 10);
}

var addCircle = function(e){
    var c = document.getElementById("thing")
    var canvas = c.getContext("2d");
    var X = e.offsetX;
    var Y = e.offsetY;
    canvas.lineTo(X,Y);
    canvas.stroke();
    canvas.beginPath();
    canvas.fillStyle = "#0000FF";
    canvas.arc(X, Y, 10, 0, 2 * Math.PI);
    canvas.fill();
    canvas.moveTo(X,Y);
}

var clear_screen = function(e){
    var c = document.getElementById("thing")
    var canvas = c.getContext("2d");
    canvas.clearRect(0,0,500,500);
    canvas.beginPath();
}

var canvas = document.getElementById("thing");
canvas.addEventListener("click", addCircle);

var clear_button = document.getElementById("clear");
clear_button.addEventListener("click", clear_screen);
