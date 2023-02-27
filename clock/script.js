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
  const hourRotation = (hourtime % 12) * 30 + (minutestime / 60) * 30 + 160;
  const minuteRotation = minutestime * 6 + 160;
  const secondRotation = secondstime * 6 + 160;
  root.style.setProperty("--hourRotation", `${hourRotation}deg`);
  root.style.setProperty("--minuteRotation", `${minuteRotation}deg`);
  root.style.setProperty("--secondRotation", `${secondRotation}deg`);
}

logTime();

setInterval(logTime, 1000);
