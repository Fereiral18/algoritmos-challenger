// Escribe una función que tome dos cadenas (a y b) como argumentos
// Devuelve el numero de veces que a ocurre en b

function myFunction (a,b) {
    let c = 0;
         for(let i = 0; i < b.length; i++){
          if(b.charAt(i) === a){
            c++;
          
          }
        
         }
         return c
  
}
myFunction('','')

console.log(myFunction('h','how many times does the character occur in this sentence?'))

// function myFunction (a,b) {
//   return b.split(a).length -1

// }
// myFunction('','')

// console.log(myFunction('h','how many times does the character occur in this sentence?'))