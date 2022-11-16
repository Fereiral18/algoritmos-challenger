//Escriba una función que tome una matriz (a) y un número (b) como argumentos
//sumar todos los elementos de la matriz con un valor mayor que b
//devuelve la suma
const myFunction = (a,b) => {
    
    return a.filter((item)=> item > b).reduce((a,b)=> a + b)
}
   



console.log(myFunction([1,2,3,4,5,6,7], 2))


//resultado [1,2,3,4,5,6,7],2 expect 25
//[78,99,100,101,401], 99 expect 602
//[-10,-11,-3,1,-4],-3 expect 1