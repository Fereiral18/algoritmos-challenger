// Escribir una función que tome una matriz (a) como argumento
// Elimina los primeros 3 elementos de 'a'
// Devuelve el resultado

function myFunction (a) {
    return a.slice(3)
}

myFunction([])
console.log(myFunction([1,2,3,4,5,6]))