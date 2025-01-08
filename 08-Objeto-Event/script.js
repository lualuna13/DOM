/* 
  Objeto event

  El objeto event representa un suceso que sucede en el navegador, como un clic, pulsar una tecla o el movimiento del mouse y proporciona información sobre las propiedades y métodos para manejarlo.

  Para acceder al objeto event (e) se pasa automaticamente como un argumento a la función manejadora.

  Sintaxis

  function funcionManejaroda(event) {
    //Código a ejecutar...
    console.log(event) //Muestra la lista de propiedades y métodos.
  }

  Propiedades del objeto event:

  - type: devuelve el tipo de evento.
  - target: devuelve el elemento donde ocurre el evento.
  - timeStamp: Devuelve la marca de tiempo en milisegundos desde la carga de la página.
  - code: Devuelve el código de la tecla presionada
  - key: Devuelve el valor de la tecla presionada
  
  - clienteX: Devuelve la posición horizontal de puntero del mouse en relación a la ventana del navegador.

  - clienteY: Devuelve la posición vertical de puntero del mouse en relación a la ventana del navegador.
*/

const button = document.getElementsByClassName("button");

/* console.log(button[0]); */

button[0].addEventListener('click', mostrarObjetoEvento)
/* accedemos al objeto evento */

function mostrarObjetoEvento(event) {
  /* Codigo que se ejecuta */
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.timeStamp);
  console.log(event.target.innerTexy);

}

document.addEventListener('keydown' , function(e){
  console.log(e)
  console.log(e.type);
  console.log(e.code);
  console.log(e.key);

} );

document.addEventListener("mousemove", (e) => {
  //console.log(e);
  console.log("Cord x: " + e.clientX + "Cord Y: " + e.clientY);
});