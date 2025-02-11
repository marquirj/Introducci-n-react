import {getHeroeById} from '../bases/08-imp-exp';

export const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se encontró el heroe');
            }
            
        },1500)
    });
};

