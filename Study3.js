//必要なエレメントを取得
const todos = [];

const btn = document.getElementById("task-btn");
const tbody = document.querySelector("tbody");

//クリックされたら行を追加
const taskCreate = function () {
  //comment
  const commentValue = document.getElementById("title").value;
  if (!commentValue) {
    alert("入力してください。");
    return;
  }

  //status-btn
  const statusBtn = "作業中";

  //delete-btn
  const deleteBtn = "削除";

  //todoの格納

  const todo = {
    comment: commentValue,
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
  itemStatus.textContent = todo.status;
  itemDelete.textContent = todo.delete;

  tasks.appendChild(itemId);
  tasks.appendChild(itemComment);
  tasks.appendChild(itemStatus);
  tasks.appendChild(itemDelete);

  resetTask();
};

//form内のリセット
const resetTask = () => (document.getElementById("title").value = "");

//タスクを作るイベント
btn.addEventListener("click", taskCreate);
