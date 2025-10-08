document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  function aggiungiTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    span.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Elimina";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = "";
    input.focus();
  }

  addBtn.addEventListener("click", aggiungiTask);

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      aggiungiTask();
    }
  });
});
