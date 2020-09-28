//必要なエレメントを取得
let btn = document.querySelector(".task-btn");
let table = document.querySelector("#table");
let comment = document.querySelector(".comment");
let status = document.querySelector(".status");
let idNum = 0;

//クリックされたら行を追加
let taskCreate = function () {
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  cell1.className = "id";
  cell3.className = "status";

  //ID
  // let id = document.querySelector(".id");
  cell1.textContent = ++idNum;

  //comment
  let title = document.querySelector(".title").value;
  let addTask = document.createElement("p");
  addTask.textContent = title;
  cell2.textContent = addTask.textContent;
  title = "";
  console.log(title);

  //status-btn
  let statusBtn = document.createElement("input");
  statusBtn.type = "button";
  statusBtn.value = "作業中";
  cell3.appendChild(statusBtn);

  //delete-btn
  let deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "削除";
  cell4.appendChild(deleteBtn);
};

let reset = function () {
  document.querySelector(".title").value = "";
};

btn.addEventListener("click", taskCreate);
btn.addEventListener("click", reset);
