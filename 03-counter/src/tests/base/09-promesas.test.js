import {getHeroeByIdAsync} from '../../bases/09-promesas'
import heroes from '../../data/heroes';
describe('Pruebas con promesa', () => {
    test('getHeroeByIdAsync', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });
    test('debe obtener un error si no existe el id', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toBe('No se encontró el heroe');
            done();
        });
    });
})