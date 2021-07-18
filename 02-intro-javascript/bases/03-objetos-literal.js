const persona = {
    nombre: 'Juan',
    apellido: 'MQ',
    edad: 31,
    direccion: {
        calle: 'Tunel',
        numero: 17,
    }
};
//console.table(persona);
console.log(persona);
const persona2 = persona;


persona2.nombre = 'Pepe';
console.log(persona2);
// Si variamos el console log despues de la asginación se cambia tambien persona
//Para hacer un clon de objeto sería de la siguienet form

const persona3 = {...persona};
