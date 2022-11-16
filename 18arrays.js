// Escribe una función que tome dos arreglos como argumentos
// Combinar ambas matrices y eliminar valores duplicados
// Ordenar el resultado de la fusión en orden ascendente
// Devuelve la matriz resultante

const matriz = (a,b) => {
   
    let data = a.concat(b);
return data.filter((item,index)=>{return data.indexOf(item) === index}).sort((a,b)=> a - b)

   }
        


console.log(matriz([-10,22,333,42],[-11,5,22,41,42]))