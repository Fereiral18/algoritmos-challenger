//escribir una función que tome dos cadenas (a y b) como argumentos
// comenzando al final de "a", inserte "b" después de cada tercer carácter de "a"
// da como resultado la cadena resultante

const myFunction = (a,b) =>{
   
    return a.replace(/regExp/g,b)
    }
    

   


console.log(myFunction("1,2,3,4,5,6,7", "."))


//resultados ("1,2,3,4,5,6", ".") resuelto "1.234.567"
//"abcde","$"  resuelto "ab$cde"
//"zxyzxyzxyzxyzxyzxy","w" resuelto "zwxyzwxyzwxyzwxyzwxyzwxy"

const agregarCaracter = (cadena, caracter, pasos) => {
    let cadenaConCaracteres = "";
    const longitudCadena = cadena.length;
    for (let i = 0; i < longitudCadena; i += pasos) {
        if (i + pasos < longitudCadena) {
            cadenaConCaracteres += cadena.substring(i, i + pasos) + caracter;
        } else {
            cadenaConCaracteres += cadena.substring(i, longitudCadena);
        }
    }
    return cadenaConCaracteres;
}

console.log(agregarCaracter("hola", ",",))