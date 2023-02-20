const btn = document.querySelector("button");
const body = document.querySelector("body");
let bool = false;

btn.addEventListener("click", function lightbtn(event) {
  btn.classList.toggle("light-out");
  body.classList.toggle("body-light-out");
  if (document.title === "Good Night") {
    document.title = "Good Morning";
  } else {
    document.title = "Good Night";
  }
});
