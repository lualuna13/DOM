//Seleccionamos los elementos por su id.
const title = document.getElementById("title");
const list = document.getElementById("list");
// Los mostramos por consola
console.log(title)
console.log(list)


/* 
  Innertext

  Devuelve un "string" del contenido visible dentro de un elemento.

    elemento.InnerText

  - Excluye los elementos ocultos.
  - Excluye los espacios en el documento
  - Excluye las etiquetas html
  
*/
console.log(">>> Con innerText")
console.log(title.innerText)
console.log(list.innerText)

/* 
  textContent

  Devuelve un "string" del contenido visible dentro de un elemento.

    elemento.textContent
*/

console.log(">>> Con textContent")
console.log(title.textContent)
console.log(list.textContent)

/* 
  innerHTML

  Devuelve un "string" con la estructura interna de el elemento seleccionado

    elemento.innerHTML

*/

console.log(">>> Con innerHTML")
console.log(title.innerHTML)
console.log(list.innerHTML)

/* 
  Modificar el contenido con innerText

  Asignamos el valor al elemento seleccionado.

    elemento.innerText = "string"

*/

title.innerText = "Proheros";
list.innerText = "No hay heroes D:";

/* 
  Modificar el contenido con textContent

  Asignamos el valor al elemento seleccionado.

    elemento.textContent = "string"

*/
title.textContent = "Heroes jovenes";
list.textContent = "Mis heroes :D";

/* 
  Modificar el contenido con InnerHTML

  Asignamos el valor al elemento seleccionado incluyendo las etiquetas html.

    elemento.textContent = "<tag>...</tag>"

*/
title.innerHTML = "Aspirantes a <span>Heroes</span>";
list.innerHTML = '<li>🐸Froppy</li> <li class="oculto">💎Red Riot</li> <li>🐸Froppy</li>';
