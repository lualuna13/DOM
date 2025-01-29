// Referencias

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
// Escuchador

addButton.addEventListener('click', creatTask);
// Función manejadora externa
function creatTask () {
   if (taskInput.value) {
    console.log(taskInput.value);
    taskInput.value = '';
   }else {
    alert('Hey escribiste una tarea');
   }

}