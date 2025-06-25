function addTask() {
    var newTask = document.createElement("li");
    var taskList = document.getElementById("taskList"); // Make sure the ID matches in HTML
    newTask.textContent = document.getElementById("inputTask").value;
    document.getElementById("inputTask").value = "";
    taskList.appendChild(newTask);
    deleteTask(newTask); // Pass newTask as parameter
}

function deleteTask(task) {
    var deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    task.appendChild(deletebtn); // Use 'task' instead of undefined 'newTask'
    
    deletebtn.onclick = function() {
        task.remove(); // Remove the task on button click
    }
}
