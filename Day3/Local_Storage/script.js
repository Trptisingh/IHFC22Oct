// 🎯 Simple To-Do List with Local Storage

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => addTaskToDOM(task));

// Add a new task
addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task !== "") {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    addTaskToDOM(task);
    taskInput.value = "";
  }
});

// Add task to DOM
function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  delBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Deleted:", task);
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
}

// Clear all tasks
clearBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
  tasks = [];
  localStorage.removeItem("tasks");
  console.log("All tasks cleared");
});
