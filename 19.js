// Escribir una función que tome un número (a) como argumento
// Si a es un número entero (no tiene lugar decimal), devuelve verdadero
// De lo contrario, devuelve falso


function myFunction (a) {
   
   return a - Math.floor(a)===0
 }

myFunction()
console.log(myFunction(3))