/* 
  Handler - Funciones

  El Handler en un evento es una función que se ejecuta cuando el evento ocurre.

  Hay tres formas de escribir la función handler

  1. Como una función externa
  2. Como una función anónima
  3. Como una función flecha

  Función externa:

  Esta función se escribe por fuera del evento y se pasa como argumento al addEventListener.

      function handler() {
          //Código a ejecutar
      }

      elemento.addEventListener
      (tipoEvento , handler)

  Función Anonima

  Esta función se escribe dentro del evento y no tiene nombre.

      elemento.addEventListener(tipoEvento , function() { //Código a ejecutar} );

  Función Flecha

  Esta función se escribe dentro del evento, no tiene nombre, pero es mas concisa. 


     elmento.addEventListener(tipoEvento, () => { //código a ejecutar })


  *Cuando el código que se ejecuta tiene más de una línea, se debe escribir entre Las Llaves.
  
  *Sí el código que se ejecuta, solo tiene una Línea se pueden omitir Las Llaves

*/


  //Referencias
const externa = document.getElementById("externa");
const anonima = document.getElementById("anonima");
const flecha = document.getElementById("flecha");


  // Función externa
function funcionExterna() {
  console.log("Click en el botón externa");
};

externa.addEventListener('click', funcionExterna);


  // Función Anónima
anonima.addEventListener('click', function () {
  console.log('Click en el botón anonima' );
});


  // Función Flecha
flecha.addEventListener('click', () => {
  console.log('Click en el botón flecha');
});