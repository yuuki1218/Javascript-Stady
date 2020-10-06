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

  //todoの格納
  const todo = {
    comment: commentValue,
  };
  todos.push(todo);

  //todoを一つずつ作る。
  const task = document.createElement("tr");
  tbody.appendChild(task);

  const itemId = document.createElement("td");
  itemId.className = "id";
  itemId.textContent = todos.length - 1;
  task.appendChild(itemId);

  const itemComment = document.createElement("td");
  itemComment.textContent = todo.comment;
  task.appendChild(itemComment);

  const statusBtn = document.createElement("td");
  statusBtn.textContent = "作業中";
  task.appendChild(statusBtn);

  const deleteBtn = document.createElement("td");
  deleteBtn.textContent = "削除";
  task.appendChild(deleteBtn);

  resetTask();
  statusBtn.addEventListener("click", () => changeStatus(statusBtn));
  deleteBtn.addEventListener("click", () => removeTask(deleteBtn));
};

//form内のリセット
let resetTask = () => (document.getElementById("title").value = "");

//削除ボタンが押されたら対象のタスクを消す。
let removeTask = (deleteBtn) => {
  const targetTask = deleteBtn.closest("tr");
  const targetId = targetTask.querySelector(".id").textContent;
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

//状態を切り替えるメソッド
function changeStatus(statusBtn) {
  console.log(statusBtn.textContent);
  if (statusBtn.textContent == "作業中") {
    statusBtn.textContent = "完了";
    return;
  } else if (statusBtn.textContent == "完了") {
    statusBtn.textContent = "作業中";
    return;
  }
}

btn.addEventListener("click", taskCreate);