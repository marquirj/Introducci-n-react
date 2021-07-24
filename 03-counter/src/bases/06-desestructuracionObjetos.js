// Desestructuración
const persona = {
    nombre: 'Juan',
    edad: 31,
    clave: 'marquirj'
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
//Para hacer lo mismo pero sin poner persona
const {nombre, edad, clave} = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

const imprimePersona = (usuario) => {
    console.log(usuario);
}
imprimePersona(persona);

//Obtener lo que se necesita se hace con la espera entre {}

const imprimePersona2 = ({nombre, rango='Capitan'}) => {
    console.log(nombre, rango);
};
imprimePersona2(persona);

//Obtener lo que se necesita se hace con la espera entre {}

const usContext = ({clave, nombre, edad, rango='Capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
    }
};
const {nombreClave} = usContext(persona);
console.log(nombreClave);
