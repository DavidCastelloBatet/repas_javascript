const activo = true;

let mensaje = '';

// con el if else
if(activo) {
  mensaje = 'Activo';
} else {
  mensaje = 'Inactivo';
}
console.log(mensaje);

// con el ternario
const mensajeT = activo ? 'Activo condicional ternario' : 'Inactivo condicional ternario';
console.log(mensajeT);

//ejecutar cuando la condicion se cumple. aquivaldria a 
//if(activo) {
//  mensaje = 'Activo';
//}
const mensajeSoloActivo = activo && 'Solo Activo';
console.log(mensajeSoloActivo);