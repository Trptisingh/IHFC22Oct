// ✅ Replace this API URL with your unique CRUDCRUD endpoint
const API_URL = "https://crudcrud.com/api/YOUR_UNIQUE_STRING/todos"; // 👈 Replace this

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Fetch and display all tasks when page loads
window.addEventListener("DOMContentLoaded", getTasks);

// Add a new task
addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    const newTask = { text: task };
    addTaskToAPI(newTask);
    taskInput.value = "";
  }
});

// Create task (POST)
function addTaskToAPI(task) {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  })
    .then((response) => response.json())
    .then((data) => addTaskToDOM(data))
    .catch((error) => console.error("Error adding task:", error));
}

// Read tasks (GET)
function getTasks() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((tasks) => {
      taskList.innerHTML = "";
      tasks.forEach(addTaskToDOM);
    })
    .catch((error) => console.error("Error fetching tasks:", error));
}

// Delete task (DELETE)
function deleteTask(id, li) {
  fetch(`${API_URL}/${id}`, { method: "DELETE" })
    .then(() => li.remove())
    .catch((error) => console.error("Error deleting task:", error));
}

// Display a task on screen
function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.textContent = task.text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => deleteTask(task._id, li));

  li.appendChild(delBtn);
  taskList.appendChild(li);
}
