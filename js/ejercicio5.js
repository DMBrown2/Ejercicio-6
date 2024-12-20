//5. Dado un array de números [23, 45, 12, 67, 34, 89, 21], escribe un programa que use un bucle para encontrar el número más grande. Usa condicionales para comparar los valores.

const listaNum = [23, 45, 12, 67, 34, 89, 21]
let numMax = listaNum[0]


for (let i = 1; i < listaNum.length; i++) {
    if (listaNum[i] > numMax) { 
      numMax = listaNum[i]   
    }
  }

console.log(`El numero mas grande de ${listaNum} es ${numMax}`)


