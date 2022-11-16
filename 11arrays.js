// Escribir una función que tome una matriz de cadenas como argumento
// Devuelve la cadena más larga

function myFunction(arr){
    return arr.reduce((acc,val)=> acc.length > val.length ? acc : val)
    }
    

console.log(myFunction(['help', 'mee', 'ayuda']))

// const array1 = [1, 2, 3, 4];

// const arr = [1,2,3,4].reduce(function(valorAnterior,valorActual,indice,vector){
//     return valorAnterior + valorActual;
// },10)

// console.log(arr)