// 🎯 JavaScript Logic for To-Do List

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add a new task when the button is clicked
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add small fade-in effect
    li.style.opacity = "0";
    taskList.appendChild(li);
    setTimeout(() => (li.style.opacity = "1"), 50);

    taskInput.value = "";
  }
});
