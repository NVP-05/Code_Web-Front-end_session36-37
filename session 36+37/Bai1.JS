let btn = document.getElementById("btn");
let input = document.getElementById("input");

input.style.borderRadius = "10px";
btn.style.borderRadius = "5px";
btn.style.width = "100px";
btn.style.height = "28px";
btn.style.backgroundColor = "green";
btn.style.marginLeft = "100px";

btn.onclick = function () {
  let answer = input.value;
  if (answer.length > 10 || answer.length <= 0) {
    alert("Không hợp lệ.");
  } else {
    alert("Thành công.");
  }
};
