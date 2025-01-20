/* Referencia */

const emojiCursor = document.querySelector(".emoji-cursor");

/* Detectamos el evento movimiento del mouse */

document.addEventListener("mousemove" , (e) => {
/*   console.log(e.clientX);
  console.log(e.clientY);*/

  /* Guardamos las coordenadas en variables */
  let mosueX = e.clientX;
  let mosueY = e.clientY;

  /* Aplicar las coordenadas al elemento emojiCursor */

  emojiCursor.style.left = `${mosueX}px`;
  emojiCursor.style.top = `${mosueY}px`;

});

/* Cambiar el emoji al precionar una tecla */

document.addEventListener("keydown" , (e) => {
  /* Utilizamos switch para asignar un nuevo emoji */

  switch (e.key) {
    case "1":
      emojiCursor.textContent = "🥰";
      break;
    case "2":
      emojiCursor.textContent = "👻";
      break;
    case "3":
      emojiCursor.textContent = "🤡";
      break;
    case "4":
      emojiCursor.textContent = "👾";
      break;
    default:
      emojiCursor.textContent = "😻";
     
  }
} );