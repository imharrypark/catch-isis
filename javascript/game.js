// Create Canvas
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 450;
canvas.height = 400;
document.body.appendChild(canvas);

// Include Background Image
var isBgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
  isBgReady = true;
};
bgImage.src = "images/background.jpg";

// Include Captain America Image
var isLindaReady = false;
var lindaImage = new Image();
lindaImage.onload = function () {
  isLindaReady = true;
};
lindaImage.src = "images/linda1.png";

// Include ISIS Image
var isIsisReady = false;
var isisImage = new Image();
isisImage.onload = function () {
  isIsisReady = true;
};
isisImage.src = "images/isis.png";

// Include Game Objects
var captain = {
  x: canvas.width / 2 - 20,
  y: canvas.height / 2 - 10,
  speed: 10
};
var isis = {
  x: 0 - 10,
  y: 0 - 10
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
  isis.x = Math.random() * ((canvas.width - 50) - 50);
  isis.y = Math.random() * ((canvas.height - 50) - 50);
}

// Update game objects
var update = function () {
  if (38 in keysDown) {
    captain.y -= captain.speed;
  }
  if (40 in keysDown) {
    captain.y += captain.speed;
  }
  if (37 in keysDown) {
    captain.x -= captain.speed;
  }
  if (39 in keysDown) {
    captain.x += captain.speed;
  }

  // Are they touching?
  if (
    captain.x <= (isis.x + 20)
    && isis.x <= (captain.x + 20)
    && captain.y <= (isis.y + 20)
    && isis.y <= (captain.y + 20)
  ) {
    numberCaught++;
    reposition();
  }
};

// Render!
var render = function () {
  if (isBgReady) {
    context.drawImage(bgImage, 0, 0);
  }

  if (isLindaReady) {
    context.drawImage(lindaImage, captain.x, captain.y);
  }

  if (isIsisReady) {
    context.drawImage(isisImage, isis.x, isis.y);
  }

  // Score
  context.fillStyle = "rgb(250, 250, 250)";
  context.font = "24px Helvetica";
  context.textAlign = "left";
  context.textBaseline = "top";
  context.fillText("ISIS caught: " + numberCaught, 32, 32);
};

var main = function () {
  update();
  render();

  // Request to do this again ASAP
  requestAnimationFrame(main);
};

// Let's play
reposition();
main();