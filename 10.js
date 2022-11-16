// Escribir una función que tome una cadena (a) como argumento
// Eliminar los últimos 3 caracteres de un
// Devuelve el resultado


function myFunction (a) {
    return a.slice(0,-3)
}
myFunction('')
console.log(myFunction('mundo'))