// Template string

const nombre = 'Juan';
const apellido = 'Martín Quirós';


const nombreCompelto = `
${nombre}
${apellido}`;
console.log(nombreCompelto);
function getSaludo(nombre){
    return 'Hola ' + nombre;
}
console.log(`Este es un texto: ${getSaludo(nombreCompelto)}`);