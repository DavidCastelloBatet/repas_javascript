// FUNCIONES EN JAVASCRIPT

// Funcion "tradicional", no se usa en REACT
function saludar(){
  return `Función tradicional en desuso`;
}
console.log(saludar());

// Forma moderna de la funcion tradicional
const saludar1 = function(parametro){
  return `Función moderna con ${parametro}`;
}
console.log(saludar1('parametro'));

// Arrow function - La mas usada en REACT
const saludar2 = (parametro) => {
  return `Arrow Function con ${parametro}`;
}
console.log(saludar2('parametro'));

// Arrow function abreviada (1 sola linea de retorno)
const saludar3 = (parametro) => `Arrow Function ${parametro} con parámetro`;
console.log(saludar3('abreviada'));

// Arrow function con retorno con mas de una linea
const getUser = () => {
  return {
    uid: '12345',
    nickName: 'AceOfBase',
  }
}
console.log(getUser());

// Arrow function con retorno con mas de una linea
// sin poner la palabra return
const getUser2 = () => ({
    uid: '12345',
    nickName: 'AceOfBase',
});
const user = getUser2();
console.log(user.nickName);
console.log(user.uid); 

// PRACTICA
// Tenemos esta función :
function getUsuario(nombre){
  return {
    uid: '12345',
    username: nombre,
  }
}
const usuarioActivo = getUsuario('David');
console.log('Enunciado Ejercicio');
console.log(usuarioActivo);
// 1.- Transformar a Arrow Function
// 2.- Retorno implicito de objeto
// 3.- Testeo
const getUsuario1 = (uid, nombre) => ({
  uid: uid,
  username: nombre,
})
const usuarioActivo1 = getUsuario1('4567', 'David L');
console.log('Resolucion');
console.log(usuarioActivo1);
console.log(`El usuario activo es ${usuarioActivo1.username} i su uid es ${usuarioActivo1.uid}.`);