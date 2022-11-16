//escribir una función que tome una matriz de cadenas como argumento
//agrupa esas cadenas por su primera letra
//devuelve un objeto que contiene propiedades con claves que representan las primeras letras
//los valores deben ser matrices de cadenas que contengan solo las cadenas correspondientes
//por ejemplo, la matriz ["alf","alice","ben"] debe transformarse en
// { a: ["Alf", "Alicia"], b: ["ben"]}

const myFunction = (arr) =>{
    let key = [...new Set(arr.map((item)=> item[0]))]
    let obj = {}

    for(prop of key){
        obj[prop] = arr.filter((element)=> element[0] === prop)
    }return obj
}

console.log(myFunction(["Alf","kenier","Joseito"]))
//resultado ["Alf","Alice","Ben"] expect { a: ["Alf", "Alice"], b: ["Ben"]}

//Resultado ["Ant","Bear","Bird"] expect {a: ["Ant"] b: ["Bear","Bird"]}



