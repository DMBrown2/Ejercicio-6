//8. Escribe un programa que use un bucle para pedir al usuario números enteros. Suma esos números y detén el bucle cuando el acumulado sea mayor o igual a 100. Muestra el total acumulado. 

let acumulado = 0
let numero

do {
    numero = +prompt(`Escriba un numero:`)
    acumulado += numero
    alert(`El total acumulado es ${acumulado}`)
} while (acumulado <= 100) 

alert(`Terminado por superar o igualar el valor de 100. (Total acumulado: ${acumulado})`)
