const resetButton = document.querySelector("button");
const root = document.documentElement;
const main = document.querySelector("main");

let counter = 0;

main.addEventListener("click", counterEvent);
document.addEventListener("keydown", counterEvent);

function counterEvent(event) {
  if (event.type === "click" || event.key === " " || event.key === "Enter") {
    click();
    changeElements();
  }
}

resetButton.addEventListener("click", function () {
  counter = 0;
  changeElements();
});

function click() {
  counter++;
  if (counter > 100) {
    counter = 0;
  }
}

function changeElements() {
  document.getElementById("number").innerHTML = counter;
  root.style.setProperty("--value", counter + "%");
}
