let btn = document.getElementById("btn");

btn.style.backgroundColor = "Green";
btn.style.borderRadius = "10px";

btn.onclick = function () {
  if (btn.textContent == "OFF") {
    btn.textContent = "ON";
  } else if (btn.textContent == "ON") {
    btn.textContent = "OFF";
  }
};
