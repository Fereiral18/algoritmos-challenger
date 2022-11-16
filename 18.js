// Escribir una función que tome un número (a) como argumento
// Dividir a en sus dígitos individuales y devolverlos en una matriz
// Consejo: es posible que desee cambiar el tipo de número para la división

function myFunction (a) {
    
    return a.toString().split('').map(Number)
        
 }

myFunction(12345)
console.log(myFunction(12345))