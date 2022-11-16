// Escribir una función que tome una matriz de objetos como argumento
// Ordenar la matriz por propiedad b en orden ascendente
// Devuelve la matriz ordenada


const matriz = (arr) => {

    return arr.sort((object1,object2)=>{
            return object1.b - object2.b
    })
    }
        


console.log(matriz([{a:5, b:15},{a:2,b:10}]))




