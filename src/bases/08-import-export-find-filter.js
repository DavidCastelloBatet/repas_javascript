// Funciona con data/heroes.js
// Importacion por defecto (le podemos dar el nombre que queramos)
import heroes from './data/heroes';
// importacion individual
import {jefes} from './data/heroes';
// importacion conjunta desestructurando un objeto
import {mesos, dies} from './data/heroes';
console.log(heroes);
console.log(jefes);
console.log(mesos, dies);

// uso del metodo find(). devuelve el primer elemento
// del array que coincide con la condicion.
const getHeroeById = (id) => {
  return heroes.find(heroe => heroe.id === id);
}
const heroe = getHeroeById(1);
console.log(heroe);

// uso de filter(). devuelve un array con todos los 
//elementos que coinciden con la condicion.

const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);
const owners = getHeroeByOwner('DC');
console.log(owners);