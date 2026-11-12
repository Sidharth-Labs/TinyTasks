const taskInput = document.getElementById("task-input");
const taskForm=document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit",function(event){
    event.preventDefault();
    const taskText=taskInput.value.trim();
    if (taskText === ""){
        return;
    }

    const newTask=document.createElement("li");
    const deleteButton= document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.type="button";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click",function(){
        newTask.remove();
    } );
    const checkbox =document.createElement("input");
    checkbox.type="checkbox";
    checkbox.classList.add("task-checkbox");

    const taskLabel=document.createElement("span");
    taskLabel.textContent=taskText;
    newTask.prepend(checkbox);
    newTask.appendChild(taskLabel);
    newTask.appendChild(deleteButton);
    checkbox.addEventListener("change", function(){
        newTask.classList.toggle("completed");
    });

    newTask.classList.add("task-item");
    taskList.appendChild(newTask);
    taskInput.value="";

    // console.log(taskList);
    
});