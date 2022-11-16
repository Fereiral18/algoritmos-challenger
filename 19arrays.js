// escribir una función que tome una matriz (a) y un valor (n) como argumentos
// guarda cada n-ésimo elemento en una nueva matriz
// devuelve la nueva matriz


const myFunction = (a,n) => {
    
    
    return a.filter((item,index)=> index % n === (n-1))
}

console.log(myFunction([1,2,3,4,5,6,7,8,9,10],3))





//result ([1,2,3,4,5,6,7,8,9,10],3)  expect [3,6,9]
// [10,9,8,7,6,5,4,3,2,1], 5