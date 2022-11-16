// Escribir una función que tome argumentos en un número arbitrario de arreglos
// Debería devolver una matriz que contenga los valores de todas las matrices

function myFunction(...arrays){
         

    return arrays.flat()
}
    
    

console.log(myFunction(['hola'],['luis'], ['fereira']))