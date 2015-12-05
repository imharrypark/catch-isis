// Create Canvas
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

// Create Images
var isBgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
  isBgReady = true;
};
bgImage.src = "images/background.jpg";
