const nom = 'David';
const edad = 5;

const pres = (`Hola ${nom} i tinc ${edad + 45} anys`);

console.log(pres);

function getSaludo(nom) {
  return `Hola ${nom}, com estas ?`
}

console.log(getSaludo(nom));