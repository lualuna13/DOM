/* 
  Evento

  Un evento es una acción o suceso que ocurre en el navegador o en un elemento DOM. Puede ser iniciado por el usuario o por el sistema y pueden ser *manejados* mediante Javascript.

  + Manejar Eventos

  Significa escribir código que "reaccione" de cierta forma cuando algo especifico suceda. Para manejar eventos es imprtante conocer algunos conceptos claves. 

  1. Target (Blanco)

  El elemnto target es el elemento del DOM en el que ocurrio el evento. Este se encuentra dentro del objeto evento (event) y se accede mediante la propiedad event.

  2. Event Lis (Escuchador)

  El event listener es el "oido" que esta atento a que ocurra un evento en un elemento especifico. Usamos el método addEventListener para escuchar eventos.

  3. Trigger (Disparador)

  Es simplemente, el desencadentamde que provoca que un event ocurra. Es la acción que realiza el usuario o el sistema para activar el evento.

  + Hacer clic
  + Mover el ratón
  + Escribir en un input

  4. Event Handler (Manejador)

  El event handler es la función que se ejecuta cada vez que ocurre el evento. Con código JS le decimos que hace el event

  + Mostrar un mensaje
  + Cambiar un color
  + Lanzar una alerta
  + ...

  Sintaxis

   target.eventListener( trigger , eventHandler)

  - target: elemento donde ocurre el evento.
  -listener: Escucha  y detecta el evento.
  - trigger: la acción que ocurre en el evento.
  - handler: la función que se ejecuta al ocurrir el evento.

*/

//Seleccionar el elemento
const button = document.getElementById("button");

// Maneja el evento
button.addEventListener("click" , mostrarMensaje );

//Definición la función

function mostrarMensaje(){
console.log("Le haz picado");
}