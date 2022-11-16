// Escribe una función que tome una matriz (a) y un número (n) como argumentos
// Debería devolver los últimos n elementos de un

function myFunction(a,n){

    return a.slice(-n);
}

myFunction([])
console.log(myFunction([1,2,3,4,5], 3))