console.log("Inicio script")

//1. Dado un array de números [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9], escribe un programa que recorra el array con un bucle e imprima únicamente los números positivos.

const listaNum = [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9]
for(let num of listaNum) {
    if(num > 0) {
        document.write(num)
    }
}



