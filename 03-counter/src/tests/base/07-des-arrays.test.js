import {returnArray} from '../../bases/07-des-arrays'
describe('Probando 07-des-arrays.js', () => {
    test('debe devovler un string y un número', () => {
        const [ letras, numeros] = returnArray();
        expect(letras).toBe('abc');
        expect(numeros).toBe(123);
    })
})