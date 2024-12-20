// 2. Escribe un programa que use un bucle para imprimir todos los números del 1 al 50. Sin embargo, solo debe mostrar los números pares. 

for(let contador = 1; contador <=50; contador++) {
    console.log(contador)

    if(contador % 2 === 0){
        document.write(`Numero pares: ${contador} <br>`)
    }
}


