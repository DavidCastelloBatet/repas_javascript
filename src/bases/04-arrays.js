// Un array en javascript es una coleccion de informacion
// que se encuentra dentro de una sola variable.

// para crear un array con un tamaño fijo
// entre paréntesis el tamaño que tendr el array
const arregloTFijo = new Array(10);
console.log(arregloTFijo.length);

// creacion normal del arreglo
const arreglo = [1,2,3];
// añadir informacion
const arreglo2 = [4,5,6];
const arreglo3 = [...arreglo, ...arreglo2]
console.log(arreglo3);

//el map es un metode de los arrays muy usado
// en REACT. regresa un array nuevo.
const doble = arreglo3.map(arreglo => arreglo * 2);
console.log(doble);

// el forEach es otro metodo
doble.forEach((item) => {
  console.log(item * 2);
})