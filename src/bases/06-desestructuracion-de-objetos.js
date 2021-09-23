// DESESTRUCTURACION DE OBJETOS
// Significa extraer las propiedades de un objeto

const persona = {
  nombre: 'David',
  apellido: 'Castelló',
  edad: 50,
  vivo: 'Barcelona',
};

// la sintaxis "base" es:

// const {} = persona;

// le estoy diciendo: extrae del objeto  persona 
// las propiedades que voy a poner dentro de las llaves.
// const { nombre, apellido, edad } = persona;
const { nombre } = persona;
// y en este momento podemos usarlas.
console.log(nombre);

// podemos renombrar un propiedad:
// a la propiedad apellido la renombramos como apellido1
// y lo usamos como apellido1
const {apellido:apellido1} = persona;
console.log(apellido1);

// CASOS DE USO

// Uso en funciones
// desestructuramos pasando el objeto (persona) en la 
// llamada a  la funcion y ponemos las propiedades que
// necesitemos, dentro de llaves, como parametros.
// Podemos usar parámetros por defecto (en este caso 
// vivo = 'el mundo').
const retornaPersona = ({nombre, apellido, edad, vivo = 'el mundo'}) => {
  return `Me llamo ${nombre} ${apellido} y tengo ${edad} años y vivo en ${vivo}.`
  
};
const personaRetornada = retornaPersona( persona );
console.log(personaRetornada);

// Use context / otro caso
const heroe = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 50,
  clave: 'Ironman',
  latlong: {
    lat: 25,
    long: 30,
  }
};

const context = ({clave, edad}) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlong: {
      lat: 25,
      long: 30,
    }
  }
}
// forma larga de extraccion
// const avenger = context(heroe);
//console.log(avenger);
//const {nombreClave, anios} = avenger;
//console.log(nombreClave, anios);

// forma corta + extraccion de objetos anidados, en
// este caso   latlong:{lat,long}
const {nombreClave, anios, latlong:{lat,long}} = context(heroe);
console.log(`${nombreClave} tiene ${anios} años.`);
console.log(`${nombreClave} esta en latitud ${lat} y longitud ${long}.`)