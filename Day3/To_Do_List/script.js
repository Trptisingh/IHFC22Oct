// 🎯 Student To-Do List Script

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add task on button click
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    // Optional: delete task on click
    li.addEventListener("click", () => {
      li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
  }
});
