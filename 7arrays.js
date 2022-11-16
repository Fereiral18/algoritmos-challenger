// Escribir una función que tome una matriz de números como argumento
// Devuelve el número de valores negativos en la matriz

function myFunction(a){
       negativo = 0
    for(i = 0 ; i <= a.length; i++){
        if(a[i] < 0){
            negativo++
            
        }
    }return negativo
  }
  
  myFunction([])
  console.log(myFunction([1,2,-3,4,-5,6]))


//   function myFunction(a) {
//     return a.filter((el) => el < 0).length;
//  }