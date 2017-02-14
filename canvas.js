var addRectangle = function(e){
    var c = document.getElementById("thing")
    var canvas = c.getContext("2d");
    var X = e.offsetX;
    var Y = e.offsetY;
    var X1 = X - 5;
    var Y1 = Y - 5;
    var X2 = X + 5;
    var Y2 = Y + 5;
    canvas.fillStyle = "#0000FF";
    canvas.fillRect(X1, Y1, X2, Y2);
}

var clear_screen = function(e){
    var c = document.getElementById("thing")
    var canvas = c.getContext("2d");
    canvas.clearRect(0,0,500,500);
}

var canvas = document.getElementById("thing");
canvas.addEventListener("click", addRectangle);

var clear_button = document.getElementById("clear");
clear_button.addEventListener("click", clear_screen);
