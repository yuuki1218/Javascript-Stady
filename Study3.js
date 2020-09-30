//必要なエレメントを取得
const todos = {};

const btn = document.querySelector(".task-btn");
const tbody = document.querySelector("tbody");
let idNum = 0;

//クリックされたら行を追加
const taskCreate = function () {
  //comment
  let title = document.querySelector(".title").value;

  //status-btn
  const statusBtn = document.createElement("input");
  statusBtn.type = "button";
  statusBtn.value = "作業中";

  //delete-btn
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "削除";

  //todoの格納
  todos.id = idNum++;
  todos.comment = title;
  todos.status = statusBtn;
  todos.delete = deleteBtn;

  //todoを一つずつ作る。
  const tasks = document.createElement("tr");
  tbody.appendChild(tasks);

  const itemId = document.createElement("td");
  const itemComment = document.createElement("td");
  const itemStatus = document.createElement("td");
  const itemDelete = document.createElement("td");

  itemId.textContent = todos.id;
  itemComment.textContent = todos.comment;
  itemStatus.appendChild(todos.status);
  itemDelete.appendChild(todos.delete);

  tasks.appendChild(itemId);
  tasks.appendChild(itemComment);
  tasks.appendChild(itemStatus);
  tasks.appendChild(itemDelete);

  resetTask();
};

let resetTask = () => (document.querySelector(".title").value = "");
