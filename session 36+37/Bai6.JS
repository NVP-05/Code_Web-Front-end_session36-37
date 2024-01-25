function createStudent() {
  let studentId = document.getElementById("studentId").value;
  let studentName = document.getElementById("studentName").value;
  let age = document.getElementById("age").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  if (
    studentId.length === 6 &&
    studentName.trim() !== "" &&
    age >= 18 &&
    phone[0] == 0 &&
    phone.length == 10 &&
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
  ) {
    let studentInfo =
      "Student ID: " +
      studentId +
      "<br>" +
      "Student Name: " +
      studentName +
      "<br>" +
      "Age: " +
      age +
      "<br>" +
      "Phone: " +
      phone +
      "<br>" +
      "Email: " +
      email;

    document.getElementById("studentInfo").innerHTML = studentInfo;
  } else {
    alert("Vui lòng kiểm tra lại thông tin nhập vào.");
  }
}
