// esto es un objeto
const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
}

console.table(persona);

// podemos anidar objetos dentro de objetos
// esto es un objeto
const persona1 = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 9876,
    lat: 14.36,
    lng: 34.67,
  }
}

console.table(persona1)

// para clonar un objeto (clonar los datos)
const persona3 = {...persona};
console.table(persona3);