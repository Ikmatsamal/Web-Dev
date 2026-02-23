
const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");


form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  createTask(taskText);
  taskInput.value = "";
});

function createTask(text) {
  
  const listItem = document.createElement("li");

 
  const leftBlock = document.createElement("div");
  leftBlock.className = "task-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskText = document.createElement("span");
  taskText.textContent = text;

 
  checkbox.addEventListener("change", function () {
    taskText.classList.toggle("done");
  });

  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑";
  deleteButton.className = "delete-btn";

  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

 
  leftBlock.appendChild(checkbox);
  leftBlock.appendChild(taskText);

  listItem.appendChild(leftBlock);
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);
}
