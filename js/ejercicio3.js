// 3. Crea un programa que pida al usuario un número del 1 al 100 y use un bucle para imprimir la tabla de multiplicar de ese número. Si la multiplicación da como resultado un número mayor a 1000, detén el bucle. 


const numero = +prompt("Escriba un numero del 1 al 100");

if (numero >= 1 && numero <= 100) {
    let i = 1

    while (i <= 10) {
        let resultado = numero * i

        if (resultado >= 1000) {
            break
        }

        document.write(`${numero} * ${i} = ${resultado}<br>`)

        i++
    }
} else {
    alert("El numero ingresado es menor que 1 o mayor que 100. Por favor escriba un numero del 1 al 100")
}



