// Template strings podemos concatenar strings, podemos
// poner variables, poner operaciones o resultados de
// operaciones.
// Se usa el acento abierto (backtick), donde ponemos el
// string y usamos ${variable o operacion} para 
// insertar variables u operaciones.
const nom = 'David';
const edad = 5;

const pres = `Hola ${nom} i tinc ${edad + 45} anys`;
console.log(pres);

// posibilidad de hacerlo multilinea
const pres1= `
Hola em dic ${nom} 
i tinc 
${edad + 45} anys`;
console.log(pres1);

// como retorno de una funcion
function getSaludo(nomRebutParametre) {
  return `Hola ${nomRebutParametre}, com estas ?`
}

console.log(getSaludo(nom));