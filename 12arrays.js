// Escribir una función que tome una matriz como argumento
// Debería devolver verdadero si todos los elementos de la matriz son iguales
// Debería devolver falso de lo contrario

function myFunction(arr){
         
    return arr.every(v=>v === arr[2])
}
    
    

console.log(myFunction(['hola', 'hola', 'hola']))