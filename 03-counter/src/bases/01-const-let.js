//Variables y constantes

const nombre = 'Juan';
const apellido = 'Martín Quirós';

let valorDado = 5;

console.log(nombre, apellido, valorDado);

//declarar otro ambito misma variable distinto valor
if(true) {
    const nombre = 'Tania';
    const apellido = 'Sánchez Ruiz';
    console.log(nombre, apellido);
}

//comprobar nombre
console.log(nombre);