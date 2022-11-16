// Escribir una función que tome una matriz (a) y un valor (n) como argumento
// Devuelve el n-ésimo elemento de 'a'

function myFunction(a, n){

    return a.splice(-n)
    }
    
    
    console.log(myFunction([1,2,3,4,5],2))