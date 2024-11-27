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

/* 
  Metodo de propiedad

  Asignar el valor de la propiedad de estilo en el elemento seleccionado.

    elemento.style.nombrePropiedad = "valor"

  - Forma más directa y legible de asignar propiedades.
  - Solo admite asignar propiedades con formato camelCase

*/
  //let colorUsuario = prompt("Escribe un color");
  titulo.style.color = "purple";
  titulo.style.backgroundColor = "pink";

  console.log("Valores asignados con JS. Color: " + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor)

/* 

  Metodo setProperty()

  Asignamos una propiedad de estilo al elemento seleccionado.

    elemento.style.setProperty(nombrePropiedad, valor, important)

  - Más flexible y poderoso.
  - Las propiedades se escriben en formato kebak-case.
  - Parametro "important" es opcional.
*/

titulo.style.setProperty("color", "darkblue"); 
titulo.style.setProperty("background-color", "red", "important");

console.log("Valores asignados con setProperty. Color: " + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor)
/* 
  Eliminar valores de propiedades

  Usamos el método de propiedad y le definimos una cadena de texto vacia.

    elemento.style.nombrePropiedad = "";

  Esto elimina los valores previamente definidos en JS y en los estilos en linea.
*/

titulo.style.color = "";
titulo.style.backgroundColor = "";

/* 
  Metodo removeProperty()

  Elimina la propiedad de estilo.

    elemento.style.removeProperty(nombre-propiedad)

  - Las propiedades se pasan en formato kebab-case

*/

titulo.style.removeProperty("color");
titulo.style.removeProperty("background-color");