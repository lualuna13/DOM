/* 

*/
// Referencia
const padre = document.
getElementById('parent');

const hijo = document.
getElementById('child');

const hermano = document.
getElementById('sibling');

//parentNode -> devuelve el nodo padre del elemento.

console.log(hijo.parentNode);

// childNode -> Devuelve una colección (NodeList) de todos los nodos hijos,  incluyendo elementos, texto, comentarios

console.log(padre.childNodes);

//children -> Devuelve una colección (HTMLCollection) de los Nodos hijos que son elementos. Ignora nodos de texto o comentarios.

console.log(padre.children);

//firstChild -> Devuelve el primer nodo hijo, puede ser un nodo de texto, comentario o elemento.

console.log(padre.firstChild);

//firstelementChild -> Devuelve el primer nodo hijo que sea

console.log(padre.firstElementChild);

//lastChild -> Devuelve el último nodo hijo, puede ser nodo de texto, comentario o elemento.

console.log(padre.lastChild);

//lastElementChild ->Devuelve el último nodo hijo que sea un elemento

console.log(padre.lastElementChild);

// nextSibling -> Devuelve el siguiente nodo hermano, pede ser nodo de texto, comentario o elemento.

console.log(hijo.nextSibling);
console.log(hermano.children);

//nextElementSibling -> Devuelve el siguiente nodo hermano que sea un elemento

console.log(hijo.nextElementSibling);
console.log(hermano.nextElementSibling);

//previousSibling -> Devuelve el anterior nodo hermano, puede ser un nodo de texto, comentario o elemento.

console.log(hijo.previousSibling);
console.log(hermano.previousSibling);

//previousElementSibling -> Devuelve el nodo anterior nodo hermano que sea un elemento.

console.log(hijo.previousElementSibling);
console.log(hermano.previousElementSibling);

