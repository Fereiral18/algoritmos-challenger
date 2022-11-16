//escribe una función que tome una matriz con elementos arbitrarios y un número como
// devuelve una nueva matriz, el primer elemento debe ser el número dado
//o cero si el número es menor que 6
//los otros elementos deben ser los elementos de la matriz original
//trata de no mutar el original

const myFunction = (arr, n) =>{ 
    arr.unshift(n);
    if(n<6){
         arr[0] = 0
    }
   
    return  arr
}

console.log(myFunction(["a","b"],2))



//resultados ([1,2,3],6) [6,1,2,3]