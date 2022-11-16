// Escribir una función que tome una matriz de números como argumento
// Debería devolver el promedio de los números

function myFunction(arr){
    return arr.reduce((previo, actual)=> previo + actual )/arr.length
}

console.log(myFunction([100,10,40]))