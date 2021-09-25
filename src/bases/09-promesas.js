import  {getHeroeById, getHeroeByOwner}  from "./bases/08-import-export-find-filter";

const promesa = new Promise((resolve, reject) => {
// Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza 
// con éxito, y reject(...) cuando falla.
// En este ejemplo, usamos setTimeout(...) para simular código asíncrono,
// en la vida real, probablemente usemos algo como XHR o una API HTML5.

  setTimeout(() => {
    const heroe = getHeroeById(2)
    resolve(heroe);
    reject('No se recibio el heroe...')
  }, 2000);
})

promesa.then((heroe) => {
  // heroe es lo que recibimos de la llamada a la funcion getHeroeById()
  // y lo pasamos como parámetro a la función resolve(...) de arriba.
  // lo recibe el .then de la promesa.
  console.log(heroe);
})

//======================================================================

// CASO DE USO
const getHeroeByOwnerAsync = (owner) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const jefe = getHeroeByOwner(owner);
      jefe  ? resolve(jefe) : reject('No se recibio el heroe...');
    }, 2000);
  })
} 
getHeroeByOwnerAsync('Mavel')
  .then((jefe) => (console.log(jefe))) // .then(console.log);
  //.catch((err) => (console.warn(err)))
  .catch(console.warn)  // en este caso, tanto el then como el catch reciben un argumento
  // y ese argumento es enviado a otra funcion. Podemos mandar la 
  // referencia a la funcion que queremos ejecutar cuando suceda el resolve/error.
