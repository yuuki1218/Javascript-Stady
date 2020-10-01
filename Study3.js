//必要なエレメントを取得
const todos = [];

const btn = document.getElementById("task-btn");
const tbody = document.querySelector("tbody");
let idNum = 0;

//クリックされたら行を追加
const taskCreate = function () {
  //comment
  let title = document.getElementById("title").value;
  if (!title) {
    alert("入力してください。");
    return;
  }

  //status-btn
  const statusBtn = document.createElement("input");
  statusBtn.type = "button";
  statusBtn.value = "作業中";

  //delete-btn
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "削除";

  //todoの格納

  const todo = {
    comment: title,
    status: statusBtn,
    delete: deleteBtn,
  };

  todo.id = todos.length;
  todos.push(todo);
  // console.log(todos);

  //todoを一つずつ作る。
  const tasks = document.createElement("tr");
  tbody.appendChild(tasks);

  const itemId = document.createElement("td");
  itemId.className = "id";
  itemId.value = todo.id;
  const itemComment = document.createElement("td");
  const itemStatus = document.createElement("td");
  const itemDelete = document.createElement("td");

  itemId.textContent = todo.id;
  itemComment.textContent = todo.comment;
  itemStatus.appendChild(todo.status);
  itemDelete.appendChild(todo.delete);

  tasks.appendChild(itemId);
  tasks.appendChild(itemComment);
  tasks.appendChild(itemStatus);
  tasks.appendChild(itemDelete);

  resetTask();
  deleteBtn.addEventListener("click", () => removeTask(deleteBtn));
};

//form内のリセット
let resetTask = () => (document.getElementById("title").value = "");

btn.addEventListener("click", taskCreate);
