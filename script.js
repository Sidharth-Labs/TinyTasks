//console.log("TinyTasks JS connected!");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList =document.getElementById("task-list");
taskForm.addEventListener("submit",function(event){
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if(taskText === ""){
        return;
    }
    const newTask=document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type ="checkbox";
    checkbox.classList.add("task-checkbox");
    newTask.textContent=taskText;
    newTask.prepend(checkbox);
    const deleteButton = document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.type="button";
    deleteButton.classList.add("delete-btn");
    newTask.appendChild(deleteButton);
    newTask.classList.add("task-item");
    taskList.appendChild(newTask);
    taskInput.value="";
});