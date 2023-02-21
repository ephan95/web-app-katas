const fast = document.getElementById("fast");
const cheap = document.getElementById("cheap");
const good = document.getElementById("good");

let lastChanged = "";

fast.addEventListener("change", function () {
  lastBox(fast);
});
cheap.addEventListener("change", function () {
  lastBox(cheap);
});
good.addEventListener("change", function () {
  lastBox(good);
});

function lastBox(check) {
  if (good.checked === true && fast.checked === true && good.checked === true) {
    lastChanged.checked = false;
    lastChanged = check;
  } else {
    lastChanged = check;
  }
}
