//Write a function that takes two numbers (min and max) as arguments
//Return an array of numbers in the range min to max

const funcion = (min,max) =>{
      let arr = []
       for(let i = min; i <= max; i++){
            arr.push(i)
       }
    return arr
}

console.log(funcion(2,10))




//resultado (2,10) expectativa ([2,3,4,5,6,7,8,9,10])





//Realizar una funcion que reciba como argumento una secuencia y devuelva una lista de
//Elementos sin ningun elemento con el mismo valor uno al lado del otro y conservando el
//orden original de los elementos.

const myFunction = (arr) =>{
     let cadena = Array.from(arr)
     const result = cadena.reduce((acc,item)=>{
          if(acc ? acc != item : acc == item){
               acc.push(item)
          }
          return acc
     },[])
    return result
      
}

console.log(myFunction('ABBCcAD'))


//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//uniqueInOrder([1,2,2,3,3])       == [1,2,3]
