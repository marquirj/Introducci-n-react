const personajes = ['Juan', 'Tania', 'Trufi'];



const [p1] = personajes;

//con la , ignorariamos el primer campo
const [, p2] = personajes;

export const returnArray = () => {
    return ['abc',123];
}

const [letras, numeros] = returnArray();


//Ejercicio
//1. el primer valor de arr se llamará nombre
//2. se llamará setNombre
/*const usState = (valor) => {
    return [valor, () =>{ console.log('Hola Mundo')}];
};
const [nombre , setNombre] = useState('Goku'); 
const arr = usState('Goku');

setNombre();console.log(arr);

console.log(nombre);*/
