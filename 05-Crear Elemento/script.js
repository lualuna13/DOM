/* 
  Obtenemos un elemento de referencia.

  - Este es el nodo de html donde vamos a crear un nuevo elemento
*/

const movie = document.getElementById("movie");

console.log(movie);

/* 
  Crear un nuevo elemento usamos createrElement

    document.createElement(tipoElemento)

  -El tipo de elemento pasa como string "" o ''
  - Se debe guardar en una variable o constante
*/

const newMovie = document.createElement("li")

/* 
  Agregar el elemento desde la referencia usamos el método append()

    elementoReferencia.append(nuevoElemento)
  - El nuevo elemento no pasa como string.
*/
movie.append(newMovie)
/* 
  Agregamos texto al nuevo elemento con innerText

    elemento.innerText = valor 
  - valor pasa como string "" o ''
*/
newMovie.innerText = "Your name";

/* 
  Agregamos las clases al nuevo elemento con el método add()

    elemento.classList.add(class)

  - La clase pasa como string
  - El método acepta mas de un parametro separandolos con comas ,
*/

newMovie.classList.add("list-item" , "bg-two")

// Agregar un 5to elemento solitos
const newPelis = document.createElement("li")

movie.append(newPelis)

newPelis.innerText = "Burbujas";

newPelis.classList.add("list-item" , "bg-two")

