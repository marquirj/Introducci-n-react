import { getHeroeById, getHeroeByOwner }  from "../../bases/08-imp-exp";
import heroes from '../../data/heroes'
describe('Pruebas en funciones de Héroes', () => {
    test('debe devolver un héroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        //console.log(heroe);
        const heroeData = heroes.find( h => h.id === id);
        expect(heroe).toEqual(heroeData);
    });
    test('debe devolver undefined', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });
    test('debe devolver un array con los hèroes de DC', () => {
        const name = 'DC';
        const heroes = getHeroeByOwner(name);
        const heroesMock = [
            {
                id: 2,
                name: 'Batman',
                owner: 'DC'
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
        ]
        expect(heroes).toEqual(heroesMock);
    });
    test('debe devolver el tamaño del array con los heroes de marvel', () => {
        const name = 'Marvel';
        const heroes = getHeroeByOwner(name);
        const heroesMock = [
            {
                id: 1,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },]
        expect(heroes.length).toBe(heroesMock.length);
    });

})

//Tarea debe retornar un array con los hereos de DC
// toEqual al array filtrado

//debe de devolver un array con los heros de Marvel
// length = 2  toBe