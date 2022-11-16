// Extraer del objeto dado, el valor de la key Country

const myFunction = (obj)=>{
return obj.country
}

console.log(myFunction(({ country: 'Sweden', continent: 'Europe' })))

//resultados ({ continent: 'Asia', country: 'Japan' }) expectativa 'Japan'
//myFunction({ country: 'Sweden', continent: 'Europe' }) Expected 'Sweden'
