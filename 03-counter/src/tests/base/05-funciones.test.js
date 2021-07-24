import {getUser, getUsuarioActivo} from '../../bases/05-funciones'

describe('Pruebas en 05-funciones', ()=> {
    test('getUser debe retornar un objeto', () => {
         const userTest = {
             uid: 'ABC123',
             username: 'marquirj'
         }   
         const user = getUser();
         expect(user).toEqual(userTest);
    });
    test('getUsuarioActivo', () => {
        const userActivo = {
            uid :'ABC567',
            username: 'marquirj'
        }
        const user = getUsuarioActivo('marquirj');
        expect(user).toEqual(userActivo);
    })
})