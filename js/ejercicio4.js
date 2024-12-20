// 4.Escribe un programa que solicite al usuario una palabra y use un bucle para contar cuántas vocales tiene. Usa condicionales para verificar si cada letra es una vocal.


const palabra = prompt(`Ingrese una palabra`)
const vocales = "aeiou"

let contador = 0

for (let letra of palabra) {
    if (vocales.includes(letra)) {
        contador++
    }
}


document.write(`La palabra '${palabra}' tiene ${contador} vocales.`)





// Contar vocales con una funcion.

// function contarVocales(cadena) {
//     let vocales = cadena.match(/[aeiouáéíóú]/gi);
//     return vocales ? vocales.length : 0
// }

// // Ejemplo de uso
// let palabra = prompt(`Ingrese una palabra`)
// alert(`La palabra ingresada contiene ${(contarVocales(palabra))} vocales`)