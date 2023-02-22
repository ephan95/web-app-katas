const resetButton = document.querySelector("button");
const root = document.documentElement;
const main = document.querySelector("main");

let counter = 0;

main.addEventListener("click", counterEvent);
document.addEventListener("keydown", counterEvent);

function counterEvent(event) {
  if (event.type === "click" || event.key === " " || event.key === "Enter") {
    increaseCounter();
    changeElements();
  }
}

resetButton.addEventListener("click", function (event) {
  event.stopPropagation();
  counter = 0;
  changeElements();
});

function increaseCounter() {
  counter++;
}

function changeElements() {
  let counterNumber = counter % 100 === 0 ? counter : counter % 100;
  document.getElementById("number").innerHTML = counter;
  root.style.setProperty("--value", counterNumber + "%");
}
