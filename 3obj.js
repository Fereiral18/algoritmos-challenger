//Escribe una función que tome un objeto con dos propiedades y una cadena como argumentos. Debería devolver el valor de la propiedad con clave igual al valor de la cadena

const countrys = (obj,key)=>{
    return obj[key]
}
    
    
    console.log(countrys({  continent: 'Asia',  country: 'Japan'}, 'continent'))


    //myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent') Expected 'Asia'
    //myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country') Expected 'Sweden'
