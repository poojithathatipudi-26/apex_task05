function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  let completed = 0;

  tasks.forEach((task, index) => {
    if (task.done) completed++;

    const li = document.createElement("li");
    li.className = `task-item fade-in ${task.priority}`;

    li.innerHTML = `
      <label class="checkbox-wrapper">
        <input type="checkbox" onchange="toggleTask(${index})" ${task.done ? 'checked' : ''}>
        <span class="${task.done ? 'task-text done' : 'task-text'}" onclick="editTask(${index})">${task.text}</span>
      </label>
      <span class="priority-tag">${task.priority}</span>
      <div class="task-actions">
        <button onclick="removeTask(${index})" title="Delete Task">🗑️</button>
      </div>
    `;

    list.appendChild(li);
  });

  document.getElementById("taskStats").innerText = `${completed} of ${tasks.length} tasks completed`;
}

function addTask() {
  const input = document.getElementById("taskInput");
  const priority = document.getElementById("priorityInput").value;
  const text = input.value.trim();

  if (!text) return alert("Task cannot be empty.");

  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push({ text, done: false, priority });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  loadTasks();
}

function toggleTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks[index].done = !tasks[index].done;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function removeTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function editTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const newText = prompt("Edit your task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  }
}

document.getElementById("addBtn").addEventListener("click", addTask);

window.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark-mode");
  }
});
