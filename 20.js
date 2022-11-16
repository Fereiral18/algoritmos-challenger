// Escribir una función que tome un número (a) como argumento
// Redondea a al segundo dígito después de la coma
// Devuelve el número redondeado

function myFunction (a) {
   
    return a.toFixed(2)
  }
 
 console.log(myFunction(321.1234567))