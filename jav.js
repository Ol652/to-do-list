function showActiveTasks() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(function(todo){
        if (todo.classList.contains("active-task")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
    });
}


const taskCompleted=document.getElementById("clear");
taskCompleted.addEventListener("click",clean);