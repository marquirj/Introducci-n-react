// Template string

const nombre = 'Juan';
const apellido = 'Martín Quirós';


const nombreCompelto = `
${nombre}
${apellido}`;

export function getSaludo(nombre = 'Tania'){
    return 'Hola ' + nombre;
}
