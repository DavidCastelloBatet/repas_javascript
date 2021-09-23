// DESESTRUCTURACION DE ARREGLOS
// Ejemplo1
const personajes = ['Goku','Trunks','Vegeta'];
const [p1] = personajes;
const [,p2] = personajes;
const [,,p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

// Ejemplo2
const retornaArreglo = () => {
  return ['abc', 123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras, numeros);

// Ejemplo 3 / Tarea uso del useState (uSt) 
// 1.- El primer valor del arreglo se llamara nombre
// 2.- el segundo setNombre

const uSt = (valor) => {
  return [valor, ()=>{console.log('Hola Mundo')}];
}
//const arr = uSt('Goku');
const [nombre, setNombre] = uSt('Goku');
console.log(nombre);
setNombre();
