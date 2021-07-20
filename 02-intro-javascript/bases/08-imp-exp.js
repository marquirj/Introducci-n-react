import heroes, {owners} from './data/heroes.js';

console.log(heroes);
const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
};
console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner);
};
console.log(getHeroeByOwner('DC'));

/*
const heroes = [
    {
        id: 1,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 2,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'CD'
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
const owners = ['DC','Marvel'];
//export default heroes;

export {
    heroes as default,
    owners
}
*/