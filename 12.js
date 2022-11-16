// Escribe una función que tome 6 valores (a,b,c,d,e,f) como argumentos
// Suma a y b
// Luego restamos por c
// Luego multiplica por d y divide por e
// Finalmente elevamos a la potencia de f y devolvemos el resultado
// Consejo: cuidado con el orden

function myFunction (a,b) {
    a = 5
    b = 4
    c = 4
    d = 3
    e = 2
    f = 2
    return  (((a+b-c)*d)/e)**f
}
myFunction()
console.log(myFunction())