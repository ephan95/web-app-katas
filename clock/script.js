const root = document.documentElement;

function logTime() {
  const now = new Date();
  const [hours, minutes, seconds] = [
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  ].map((time) => time.toString().padStart(2, "0"));
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  changeElements(formattedTime, hours, minutes, seconds);
}

function changeElements(changedText, hourtime, minutestime, secondstime) {
  document.getElementById("digitalTime").innerText = changedText;
  root.style.setProperty(
    "--hourRotation",
    (hourtime % 12) * 30 + (minutestime / 60) * 30 + 160 + "deg"
  );
  root.style.setProperty("--minuteRotation", minutestime * 6 + 160 + "deg");
  root.style.setProperty("--secondRotation", secondstime * 6 + 160 + "deg");
}

logTime();
changeElements();

setInterval(logTime, 1000);
