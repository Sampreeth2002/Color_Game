var no = 6;
var colors = generateRandomColors(no);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var cdis = document.querySelector("#cdis");
var mdis = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector(".button");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function() {
  easy.classList.add("selected");
  hard.classList.remove("selected");
  no = 3;
  colors = generateRandomColors(no);
  pickedColor = pickColor();
  cdis.textContent = pickedColor;
  for (var i = 0; i < 3; i++) {
    square[i].style.background = colors[i];
  }
  for (var i = 3; i < 6; i++) {
    square[i].style.display = "none";
  }
});
hard.addEventListener("click", function() {
  easy.classList.remove("selected");
  hard.classList.add("selected");
  no = 6;
  colors = generateRandomColors(no);
  pickedColor = pickColor();
  cdis.textContent = pickedColor;
  for (var i = 0; i < 6; i++) {
    square[i].style.background = colors[i];
    square[i].style.display = "block";
  }
});

cdis.textContent = pickedColor;
reset.addEventListener("click", function() {
  colors = generateRandomColors(no);
  pickedColor = pickColor();
  cdis.textContent = pickedColor;
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
  reset.textContent = "New Colors";
  mdis.textContent = "";
});

for (var i = 0; i < square.length; i++) {
  square[i].style.background = colors[i];
  square[i].addEventListener("click", function() {
    var cclor = this.style.background;
    if (cclor == pickedColor) {
      mdis.textContent = "Correct!!";
      changeColor(cclor);
      h1.style.background = cclor;
      reset.textContent = "Play Again";
    } else {
      this.style.background = "#232323";
      mdis.textContent = "Try Again";
    }
  });
}
function changeColor(color) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = color;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
