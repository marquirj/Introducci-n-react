import { getImagen } from "../../bases/11-async"

describe('Pruebas con async-await', () => {
    test('Debe devolver la url de la imagen', async() => {
        const url =await getImagen();
        expect(url.includes('https://')).toBe(true);
    })
})