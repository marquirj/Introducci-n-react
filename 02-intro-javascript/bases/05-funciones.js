// funciones en JS
const saludar  = function(nombre) {
    return  `Hola, ${nombre}`;
};

//Funcion de flecha
const saludar2  = (nombre) => {
    return  `Hola, ${nombre}`;
};

//Simplificando la anterior si solo devuelve un return
const saludar3  = (nombre) => `Hola, ${nombre}`;
const saludar4  = () => `Hola Mundo`;

console.log(saludar);
console.log(saludar2('Tania'));
console.log(saludar3('Tania'));
console.log(saludar4());



const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'marquirj'
    }
};
//Hacer lo anterior de manera simplificada
const getUser2 = () => 
    ({
        uid: 'ABC123',
        username: 'marquirj'
    });
console.log(getUser());
console.log(getUser2());
//Tarea
//1. Transformar a una función de flehca
//2. Tiene que retornar un objeto implícito
//3. Pruebas
function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const getUsuarioActivo2 = (nombre) => 
({
    uid: 'ABD789',
    username: nombre
});