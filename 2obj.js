//Escribe una función que tome un objeto con dos propiedades como argumento. Debería devolver el valor de la propiedad con la clave 'prop-2'. Sugerencia: es posible que desee utilizar el acceso de propiedad de corchetes.

const myFunction = (obj)=>{
    return obj['prop-2']
    }
    
    console.log(myFunction(({  'prop-2': 'two',  prop: 'test'})))