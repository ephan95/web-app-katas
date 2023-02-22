const redslider = document.getElementById("red");
const greenslider = document.getElementById("green");
const blueslider = document.getElementById("blue");
const backgroundcolor = document.documentElement;

let colors = {
  red: redslider.getAttribute("value"),
  green: greenslider.getAttribute("value"),
  blue: blueslider.getAttribute("value"),
};

window.addEventListener("load", function () {
  changeColor();
});

redslider.addEventListener("input", function () {
  getNumber(redslider, "red");
  changeColor();
});
greenslider.addEventListener("input", function () {
  getNumber(greenslider, "green");
  changeColor();
});
blueslider.addEventListener("input", function () {
  getNumber(blueslider, "blue");
  changeColor();
});

function getNumber(slider, color) {
  colors[color] = slider.value;
}

function changeColor() {
  let hexR = parseInt(colors.red).toString(16).padStart(2, "0");
  let hexG = parseInt(colors.green).toString(16).padStart(2, "0");
  let hexB = parseInt(colors.blue).toString(16).padStart(2, "0");
  let hex = "#" + hexR + hexG + hexB;
  document.getElementById("colorvalue").innerHTML = hex;
  backgroundcolor.style.setProperty("--color", hex);
}
