// Escribir una función que tome una cadena como argumento
// Extrae los últimos 3 caracteres de la cadena
// Devuelve el resultado

function myFunction (str) {
    return str.slice(-3)
}

myFunction('')
console.log(myFunction('Mundo'))