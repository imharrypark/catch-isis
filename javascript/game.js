// Create Canvas
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

// Include Background Image
var isBgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
  isBgReady = true;
};
bgImage.src = "images/background.jpg";

// Include Game Objects
var captain = {
  x: 0,
  y: 0,
  speed: 230;
}
var isis = {
  x: 0,
  y: 0
};
var numberCaught = 0;

// Event Handlers
var keysDown = {};

addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
}, false);

// Repositioning upon game start & each capture.
var reposition = function(){
  captain.x = canvas.width / 2;
  captain.y = canvas.height / 2;

  isis.x = Math.random() * (canvas.width - 0);
  isis.y = Math.random() * (canvas.height - 0);
}