let input = document.getElementById("input");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul-id");

input.style.backgroundColor = "yellow";
input.onkeyup = function () {
  if (input.value == 0) {
    input.style.backgroundColor = "yellow";
  } else {
    input.style.backgroundColor = "";
  }
};

btn.onclick = function () {
  let li = document.createElement("li");
  li.innerHTML = input.value;
  ul.appendChild(li);
  input.value = "";
  input.style.backgroundColor = "yellow";
};
