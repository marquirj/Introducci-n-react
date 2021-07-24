const personajes = ['Juan', 'Tania', 'Trufi'];

console.log(personajes[0]);
console.log(personajes[1]);

const [p1] = personajes;
console.log(p1);

//con la , ignorariamos el primer campo
const [, p2] = personajes;
console.log(p2);

const returnArray = () => {
    return ['abc',123];
}

const [letras, numeros] = returnArray();
console.log(letras, numeros);

//Ejercicio
//1. el primer valor de arr se llamará nombre
//2. se llamará setNombre
const usState = (valor) => {
    return [valor, () =>{ console.log('Hola Mundo')}];
};
const [nombre , setNombre] = useState('Goku'); 
const arr = usState('Goku');
console.log(arr);

console.log(nombre);
setNombre();
