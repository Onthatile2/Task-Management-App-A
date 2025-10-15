let tasks = [];

const titleInput = document.getElementById("myInput");
const descInput = document.getElementById("myText");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingCountEl = document.getElementById("pending-count");

addTaskBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const description = descInput.value.trim();



  tasks.push({ title, description, completed: false });

  titleInput.value = "";
  descInput.value = "";

  renderTasks();
});


function renderTasks(filter = 'all') {
  taskList.innerHTML = "<h3>Task List</h3>";

  let filteredTasks = tasks;
  if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  }

  if (filteredTasks.length === 0) {
    taskList.innerHTML += "<p>No tasks available.</p>";
    return;
  }

  filteredTasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.classList.add("task");

    if (task.completed) div.classList.add("completed");

    const title = document.createElement("span");
    title.classList.add("task-title");
    title.textContent = `${task.title}: ${task.description}`;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Undo" : "Complete";
    completeBtn.onclick = () => toggleComplete(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(index);

    div.appendChild(title);
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);

    taskList.appendChild(div);
  });

  updatePendingCount();
}


function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}


function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks(); 
}


function updatePendingCount() {
  const pending = tasks.filter(task => !task.completed).length;
  pendingCountEl.textContent = pending;
}


function filterTasks(filter) {
  renderTasks(filter);
}



  window.location.href = "login.html";


renderTasks();
