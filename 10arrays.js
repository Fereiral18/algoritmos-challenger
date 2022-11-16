// Escribir una función que tome una matriz de números como argumento
// Debería devolver la suma de los números

function myFunction(a){

    return a.reduce((a,b)=>a +b,0)
}

myFunction([])
console.log(myFunction([1,23,50,26]))