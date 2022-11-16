// Escribir una función que tome una matriz (a) y un valor (b) como argumento
// La función debe eliminar todos los elementos iguales a 'b' de la matriz
// Devuelve la matriz filtrada

function myFunction(a,b){
          
  return a.filter((item)=> item !== b)
}


    


myFunction([], )
console.log(myFunction([1,2,3,4,5,6], 4))