import '@testing-library/jest-dom';
import {getSaludo} from '../../bases/02-template-string';

describe('Pruebas en 02-templase string', () => {
    test('getSaludo debe retornar hola juan', () => {
        const nombre = 'Juan';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+ nombre);
    })
    test('getSaludo debe retornar Tania', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Tania');
    })
})