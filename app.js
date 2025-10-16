let tasks = [];
<<<<<<< HEAD
=======

>>>>>>> complete/delete
const titleInput = document.getElementById("myInput");
const descInput = document.getElementById("myText");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");
<<<<<<< HEAD
=======
const pendingCountEl = document.getElementById("pending-count");
>>>>>>> complete/delete

addTaskBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const description = descInput.value.trim();

<<<<<<< HEAD
  if (title === "" || description === "") {
    alert("Please fill in both title and description.");
    return;
  }

  tasks.push({ title, description });
=======


  tasks.push({ title, description, completed: false });
>>>>>>> complete/delete

  titleInput.value = "";
  descInput.value = "";

  renderTasks();
});

<<<<<<< HEAD
function renderTasks() {
  taskList.innerHTML = "<h3>Task List</h3>";
  if (tasks.length === 0) {
=======

function renderTasks(filter = 'all') {
  taskList.innerHTML = "<h3>Task List</h3>";

  let filteredTasks = tasks;
  if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  }

  if (filteredTasks.length === 0) {
>>>>>>> complete/delete
    taskList.innerHTML += "<p>No tasks available.</p>";
    return;
  }

<<<<<<< HEAD
  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <div class="task">
        <strong>${index + 1}. ${task.title}</strong><br/>
        <span>${task.description}</span>
      </div>
    `;
  });
}
const task = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false }
  ];

  const pendingCountEl = document.getElementById("pending-count");


  function filterTasks(filter) {
    let filteredTasks = task;

    if (filter === 'completed') {
      filteredTasks = task.filter(task => task.completed);
    }
 
    const pendingCount = tasks.filter(task => !task.completed).length;
    pendingCountEl.textContent = pendingCount;

  }
    filterTasks('all');
=======
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
>>>>>>> complete/delete
