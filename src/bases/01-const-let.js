// Variables y constantes
// NO usar var
// Usar const cuando sepamos que no va a cambiar el valor
// de la variable.
// Usar let cuando el valor vaya a cambiar.
const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 4;


console.log(nombre, apellido, valorDado);
// variables de scope (ámbito o contexto de uso de
// la variable)
// en este caso vemos que const nombre ya existe
// globalmente pero la podemos usar en este scope
//
if (true) {
  const nombre = 'Peter';
  console.log(nombre);
}
console.log(valorDado);