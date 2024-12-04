/* 

  Accedemos al primer elemento de la lista.

*/

const botanas = document.getElementsByTagName('li');

/* 
  Propiedad classList

  accedemos a las listas de clase que tiene un elemento.

    elementos.classList

  - Devuelve un DOM Token List (Listado de clases ene el DOM) en tipo array.

*/

console.log( botanas[0].classList);
console.log( botanas[0].classList[0]); //Accedemos a la clase a traves de un indicie

/* 
  Para agregar clases usamos el método add()

    elementos.classList.add(clase)

  - Nombre de la clase pasa como string entre "" o ''
*/

botanas[1].classList.add("bg-ligthpink");

/* 
  Verifica si existe una clase en un elemento con el método containe()

    elemento.classList.contains(clase)

  - Devuelve true si existe la clase
  - Devuelve false si no existe la clase.
*/
console.log(botanas[2].classList.contains("botana"));
console.log(botanas[2].classList.contains("bg-ligthblue"));

/* 
  Para eliminar una clase usamos el método remove()

    elemento.classList.remove(clase)

  - La clase pasa como un string entre "" o ''
*/
botanas[3].classList.remove("bg-ligthpink");
botanas[3].classList.remove("botana");
//Terminamos clases con Javascript