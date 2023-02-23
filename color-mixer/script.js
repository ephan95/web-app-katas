const redslider = document.getElementById("red");
const greenslider = document.getElementById("green");
const blueslider = document.getElementById("blue");
const backgroundcolor = document.documentElement;

let colors = {
  red: redslider.value,
  green: greenslider.value,
  blue: blueslider.value,
};

window.addEventListener("load", changeColor);

[redslider, greenslider, blueslider].forEach((slider) => {
  const sliderColor = slider.id;
  slider.addEventListener("input", function () {
    getNumber(this, sliderColor);
    changeColor();
  });
});

function getNumber(slider, color) {
  colors[color] = slider.value;
}

function changeColor() {
  const hex =
    `#` +
    Object.values(colors) // destruct object and turn the numbers into array
      .map((c) => parseInt(c).toString(16).padStart(2, "0")) //for each number in array do the function
      .join("");
  document.getElementById("colorvalue").innerHTML = hex;
  backgroundcolor.style.setProperty("--color", hex);
}
