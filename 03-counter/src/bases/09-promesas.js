import {getHeroeById} from './bases/08-imp-exp.js';
/*const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const heroe = getHeroeById(3);
        //resolve(heroe);
        reject('hola');
    },2000)
});
promesa.then ( (heroe) => {
    console.log('heroe', heroe);
})
.catch( err => console.warn(err));*/

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            console.log(heroe);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se encontró el heroe');
            }
            
        },2000)
    });
};

getHeroeByIdAsync(3)
.then( heroe => console.log('Heroe', heroe))
.catch(err => console.warn(err));