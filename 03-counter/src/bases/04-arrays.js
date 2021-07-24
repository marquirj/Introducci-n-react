//Arrays en JS

const array = [1,2,3,4];
//No usar el push
//array.push(1);
//array.push(2);
//array.push(3);
//array.push(4);

console.log(array);

let array2 = [...array,5];


const array3 = array2.map( function(numero){
    return numero *2;
});
console.log(array);
console.log(array2);
console.log(array3);