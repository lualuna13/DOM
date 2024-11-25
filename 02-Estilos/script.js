/* 
  Selecciona el elemento h1 a traves de su clase
*/

const titulo = document.querySelector(".titulo");

/* 
  Mostrando el nodo seleccionado

  - Nodo expandido -> <h1>...</h1>
  - Nodo abstracto -> h1.title

  Algunos navegadores optimizan la representación de los nodos en la consola. (Chrome)
*/
console.log(titulo)

/* 
  objeto style
  Accedemos a el usando ls notación de punto (.)

    elemento.style
  Resultado es CSS Style Declartion . Es una lista que
  representa todas las propiedades de estilo de un elemento.

  Unicamente muestra el valor de los estilos en linea declarados directamente en el elemento html.

*/
console.log(titulo.style)

/* 
  Propiedades de Estilo

  Accedemos a las propiedades usando la notacion de un punto (.)

    elemento.style.nombrePropiedades

  A diferencia de CSS, las propiedades de estilo en JS las escribimos usando el formato camelCase.
  
    CSS -> background-color (kebab-case)
     JS -> backgroundColor (cameCase)

*/

console.log("Valores en linea. Color: " + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor)
