// Escribir una función que tome una matriz (a) como argumento
// Extrae los últimos 3 elementos de 'a'
// Devuelve la matriz resultante

function myFunction (a) {
    return a.slice(-3)
}

myFunction([])
console.log(myFunction([1,2,3,4,5,6,7]))