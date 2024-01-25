let input = document.getElementById("input");
let div = document.getElementById("div");

// Cách 1:
input.onchange = function () {
  div.textContent = input.value;
};
// Cách 2:
input.onkeyup = function () {
  div.textContent = input.value;
};
