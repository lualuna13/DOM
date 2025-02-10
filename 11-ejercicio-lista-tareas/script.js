// Referencias

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Escuchador

addButton.addEventListener('click', creatTask);
// Función manejadora externa
function creatTask () {
   if (taskInput.value) {
      //crear elemento que intregra una tarea
      console.log(taskItem.classList);

      //Con esto se crea el contenedor de una tarea
      const taskItem = document.createElement('div')
      taskItem.classList.add('task');
      //Creamos parrafo de la tarea
      const taskText = document.createElement('p');
      taskText.innerText = taskInput.value;
      //Creamos el contenedor de los iconos
      const taskIcons = document.createElement('div');
      taskIcons.classList.add('task-icon');
      //Crear el icono de check
      const iconCheck = document.createElement('i');
      iconCheck.classList.add('bi', 'bi-chack-circle', 'icon-complete');
      //Crear el icocno de trash
      const iconDelete = document.createElement('i');
      iconDelete.classList.add('bi', 'bi-trash', 'icon-delete')
       //Estructura de los elemrntos
       taskIcons.append(iconCheck, iconDelete);
       taskItem.append(taskText. taskIcons);
       taskList.append(taskItem);
      
    taskInput.value = '';
   }else {
    alert('Hey escribiste una tarea');
   }

}


