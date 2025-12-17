const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

// Ecouter d'évenement pour la saisie de texte et l'ajout de tâches
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText });
    taskInput.value = "";
    displayTasks();
  }
}

// fonction pour afficher les tâches
function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="task-${index}" ${
      task.completed ? "checked" : ""
    }>
            <label for="task-${index}">${task.text}</label>`;
    li.querySelector("input").addEventListener("change", () =>
      toggleTask(index)
    );
    taskList.appendChild(li);
  });
}

// fonction pour selectionner les taches completées
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

// fonction pour effacer les taches completées
function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);
  displayTasks();
}

// Ecouter d'évenement pour l'ajout de tâches
addTaskBtn.addEventListener("click", addTask);
// Ecouter d'évenement pour effacer les tâches completées
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
