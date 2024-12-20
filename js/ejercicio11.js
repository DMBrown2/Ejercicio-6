// 11. Crea un programa que solicite al usuario una lista de palabras separadas por comas. Usa un bucle para verificar cuáles de esas palabras son palíndromas y muéstralas. Una palabra es palíndroma si se lee igual al derecho y al revés. 

let listaPalabras = prompt(`Ingrese un listado de palabras separadas por coma`)
let array = listaPalabras.split(",").map(palabra => palabra.trim().toLocaleLowerCase())
// console.log(array)
let palindromos = []

for(palabra of array) {
    // console.log(palabra)

    let palabrainvertida = palabra.split("").reverse().join("")

    if(palabra === palabrainvertida) {
        palindromos.push(palabra)

    }
}

if(palindromos.length > 0) {
    document.write(`De la siguiente lista de palabras:  ${array.join(",")}, los palíndromos son: ${palindromos.join(",")}.`)
} else {
    document.write(`De la lista de palabras: ${array.join(", ")}, no hay palabras palíndromas.`)
}




