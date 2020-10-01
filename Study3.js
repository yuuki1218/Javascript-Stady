//必要なエレメントを取得
const todos = [];

const btn = document.querySelector(".task-btn");
const tbody = document.querySelector("tbody");
let idNum = 0;

//クリックされたら行を追加
const taskCreate = function () {
  //comment
  let title = document.querySelector(".title").value;
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
let resetTask = () => (document.querySelector(".title").value = "");

//削除ボタンが押されたら対象のタスクを消す。
let removeTask = (deleteBtn) => {
  const targetTask = deleteBtn.closest("tr");
  const targetId = targetTask.querySelector(".id").value;

  todos.forEach((todo, index) => {
    if (todo.id === targetId) {
      todos.splice(index, 1);
    }
  });
  tbody.removeChild(targetTask);

  updateId();
};

function updateId() {
  todos.forEach((todo, index) => {
    todo.id = index;
  });
  const allId = tbody.querySelectorAll(".id");
  allId.forEach((id, index) => {
    id.textContent = index;
  });
}

btn.addEventListener("click", taskCreate);
