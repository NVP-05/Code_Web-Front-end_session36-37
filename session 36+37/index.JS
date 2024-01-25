// let btn = document.getElementById("btn");
// let div = document.getElementById("container");
// let a = 1;

// btn.onclick = function () {
//   // Cách 1
//   //   if (a % 2 == 0) {
//   //     div.style.backgroundColor = "";
//   //     div.style.color = "";
//   //     div.style.width = "";
//   //     div.style.height = "";
//   //     div.style.borderRadius = "";
//   //     div.style.lineHeight = "";
//   //     div.style.textAlign = "";
//   //     div.style.border = "";
//   //   } else {
//   //     div.style.backgroundColor = "yellow";
//   //     div.style.color = "red";
//   //     div.style.width = "200px";
//   //     div.style.height = "200px";
//   //     div.style.lineHeight = "200px";
//   //     div.style.textAlign = "center";
//   //     div.style.border = "10px solid black";
//   //     div.style.borderRadius = "50%";
//   //   }
//   //   a++;

//   //Cách 2
//   //   if (div.classList.contains("round-element") === true) {
//   //     div.classList.remove("round-element");
//   //   } else {
//   //     div.classList.add("round-element");
//   //   }

//   // Cách 3
//   div.classList.toggle("round-element");
// };

let todoListDatabase = [
  {
    id: 1,
    content: "Đánh răng lúc 7h",
    status: false,
  },
  {
    id: 2,
    content: "Rửa mặt sau khi đánh răng",
    status: false,
  },
  {
    id: 3,
    content: "Ngủ sớm lúc 8h",
    status: true,
  },
];

let ul = document.getElementsByClassName("list")[0];
let input = document.getElementById("input");
let addBtn = document.getElementById("add-btn");

function renderToDoToHTML() {
  ul.innerHTML = "";
  for (let index in todoListDatabase) {
    // {id, content, status} --> <li>{id, content, status}</li>
    // ul cho li vào
    // Cách 1
    // ul.appendChild(li)

    let li = document.createElement("li");
    li.classList.add("list-item");
    li.id = todoListDatabase[index].id;
    li.innerHTML = todoListDatabase[index].content;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Xóa";
    deleteBtn.classList.add("delete-btn");

    let editBtn = document.createElement("button");
    editBtn.innerText = "Sửa";
    editBtn.classList.add("edit-btn");

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    ul.appendChild(li);
    //
    //
    // Cách 2
    // ul.innerHTML = "<li></li>"

    //   let li = `<li class="list-item" id="${todoListDatabase[index].id}">
    //     ${todoListDatabase[index].content}
    //   <button class="delete-btn">Xóa</button>
    //   <button class="edit-btn">Sửa</button>
    //   </li>`;
    //   console.log(li);
    //   ul.innerHTML += li;
  }
}
renderToDoToHTML();

addBtn.onclick = function () {
  input.value;
  let newTodo = {
    id: todoListDatabase[todoListDatabase.length - 1].id + 1,
    content: input.value,
    status: false,
  };
  todoListDatabase.push(newTodo);
  renderToDoToHTML();
};
