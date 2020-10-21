//必要なエレメントを取得
const todos = [];
console.log("hello");

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
  const statusValue = "作業中";

  //delete-btn
  const deleteValue = "削除";

  //todoの格納

  const todo = {
    comment: commentValue,
    status: statusValue,
    delete: deleteValue,
  };
  todos.push(todo);

  //todoを一つずつ作る。
  const task = document.createElement("tr");
  tbody.appendChild(task);

  const itemId = document.createElement("td");
  itemId.className = "id";
  itemId.value = todos.length - 1;
  itemId.textContent = itemId.value;
  task.appendChild(itemId);

  const itemComment = document.createElement("td");
  itemComment.textContent = todo.comment;
  task.appendChild(itemComment);

  const statusBtn = document.createElement("td");
  statusBtn.textContent = todo.status;
  task.appendChild(statusBtn);

  const deleteBtn = document.createElement("td");
  deleteBtn.textContent = todo.delete;
  task.appendChild(deleteBtn);

  resetTask();
  deleteBtn.addEventListener("click", () => removeTask(deleteBtn));
};

//form内のリセット
let resetTask = () => (document.getElementById("title").value = "");

//削除ボタンが押されたら対象のタスクを消す。
let removeTask = (deleteBtn) => {
  const targetTask = deleteBtn.closest("tr");
  const targetId = targetTask.querySelector(".id").value;
  todos.splice(targetId, 1);
  tbody.removeChild(targetTask);
  updateId();
};

//数字を振り直すメソッド
function updateId() {
  const allId = tbody.getElementsByClassName("id");
  for (let i = 0; i < allId.length; i++) {
    const idNum = allId[i];
    idNum.textContent = i;
  }
}

btn.addEventListener("click", taskCreate);
