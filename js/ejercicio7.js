//7. Usa un bucle para imprimir los números del 1 al 50. Si el número es divisible entre 3, imprime "Fizz". Si es divisible entre 5, imprime "Buzz". Si es divisible entre ambos, imprime "FizzBuzz". 

for(let contador = 1; contador <= 50; contador++) {

    if (contador % 3 === 0 && contador % 5 === 0) {

        document.write('FizzBuzz <br>')

    } else if (contador % 3 === 0) {

        document.write('Fizz <br>')

    } else if (contador % 5 === 0) {
        
        document.write('Buzz <br>')

    } else {
        document.write(`${contador} <br>`)
    }

}
