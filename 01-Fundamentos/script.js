/* 
  DOM

  Organiza Los elementos del documento en "nodos" en un árbol jerárquico.
  Nodo -> Todo elemento individual de nuestro documento.

  Tipos de Nodo

  1. Nodo de documento
  2. Nodo de Elemento
  3. Nodo de atributo
  4. Nodo de texto
  5. Nodo de comentarios

*/
/* 
  Nodo de Documentos

  Este nodo representa el documento completo de html. Incluye el contenido desde La "raiz" - Root, hasta Los elementos hijos.

  Para acceder usamos:

  -› document

*/

console. log(document);
console. log(document.head);
console. log(document.body); console. log(document. title);
console. log(document .URL);

/*
Nodo elemento

Para seleccionar nodos de elementos, usamos
getELementsBy TagName("etiqueta")
Se escribe desupués del nodo "document"
*/
let title = document-getElementsByTagName ("P");
console. log(title)
/*

Nodos de atributo
Son Los nodos que accedemos a través de su clase o de su id

getELementById("nombreId")
getELementByCLassName ("nombreclase")

querySelector ("nombreselector") -› Seleccione el primer elemento que encuentre en el selector 

querySeelectorALL("nombreselector") -> Seleccionar todos los elementos con el mismo selector.
*/
/*
Let titulos = document.getELementById("titLe")
console. Log(title. innerText);
console. Log(title);
console. Log(title. id);
Let texts = document.getELementsByCLassName ("paragraph");
console. Log(texts);
console. Log(texts[0]. textcontent);
console. Log(texts[1].textcontent);
*/

// Let titulo = document. querySeelector ("h1"); // Tag
// Let titulo = document. queryseelector("#title"); //Id
let titulo = document querySelector("•title"); // class
console. log(titulo)
// Let parrafos = document. queryseLectorALL("p"); // Tag
// Let parrafos = document querySelectorALL(*#paragraph"); // Id
let parrafos = document querySelectorAll("•paragraph"): // class
console. log(parrafos)
/*
Nodo de Texto
Son Los elementos de texto contenidos en las etiquetas de html.
• innerText
• textcontent
*/
let subtitle = document querySelector("-subtitle");
console. log(subtitle.innerText);
console. log(subtitle.textContent);
/*
Nodos de Comentarios

*/
