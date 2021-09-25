
// Funciona con bases / 08-imp....
// exportacion por defecto
const heroes = [ 
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
// exportacion por defecto
export default heroes;
// exportacion individual
export const jefes = ['Marvel', 'DC'];
// exportacion conjunta en un objeto
const mesos = ['gener', 'febrer', 'març'];
const dies = ['dilluns', 'dimarts', 'dimecres'];
export {
    mesos,
    dies,
}