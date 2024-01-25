let input1 = document.getElementById("input-1");
let input2 = document.getElementById("input-2");
let input3 = document.getElementById("input-3");
let btn = document.getElementById("btn");

btn.onclick = function () {
  input3.value = Number(input1.value) + Number(input2.value);
};
