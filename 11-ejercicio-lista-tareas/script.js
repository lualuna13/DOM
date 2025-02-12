// Referencias

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Escuchador

addButton.addEventListener('click', creatTask);

//El usuario da Enter y se crea la tarea
//addButton.addEventListener('keydown', creatTask);


// Función manejadora externa
function creatTask () {
   if (taskInput.value) {
   
      //Con esto se crea el contenedor de una tarea
      const taskItem = document.createElement('div')
      taskItem.classList.add('task');

      //Creamos parrafo de la tarea
      const taskText = document.createElement('p');
      taskText.innerText = taskInput.value;

      //Creamos el contenedor de los iconos
      const taskIcons = document.createElement('div');
      taskIcons.classList.add('task-icons');

      //Crear el icono de check
      const iconCheck = document.createElement('i');
      iconCheck.classList.add('bi', 'bi-check-circle', 'icono-complete');

      //Crear el icocno de trash
      const iconDelete = document.createElement('i');
      iconDelete.classList.add('bi', 'bi-trash', 'icon-delete')

       //Estructura de los elemrntos
       taskIcons.append(iconCheck, iconDelete);
       taskItem.append(taskText,taskIcons);
       taskList.append(taskItem);

       //Escuchadores de los iconos
       iconCheck.addEventListener('click', (e) => {
         e.target.parentNode.parentNode.classList.toggle('complete');
       });

       //Definir un escuchador al elemento iconDelete
       iconDelete.addEventListener('click', (e) => {
       e.target.parentNode.parentNode.remove();
       });
      
   
     

    //Regresamos el valor vacio de Input  
    taskInput.value = '';
   }else {
    alert('Hey escribiste una tarea');
   }

}


