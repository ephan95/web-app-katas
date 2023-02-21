const fast = document.getElementById("fast");
const cheap = document.getElementById("cheap");
const good = document.getElementById("good");

let LastChecked = "";

fast.addEventListener("change", function () {
  LastBox(fast);
});
cheap.addEventListener("change", function () {
  LastBox(cheap);
});
good.addEventListener("change", function () {
  LastBox(good);
});

function LastBox(check) {
  if (good.checked === true && fast.checked === true && good.checked === true) {
    LastChanged.checked = false;
    LastChanged = check;
  } else {
    LastChanged = check;
  }
}
