// Escribir una función que tome una matriz de números como argumento
// Debería devolver una matriz con los números ordenados en orden descendente

function myFunction(arr){

    return arr.sort().reverse()
}

myFunction([])
console.log(myFunction([4,3,1,2]))