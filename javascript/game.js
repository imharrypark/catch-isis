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