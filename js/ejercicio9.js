//9. Pide al usuario un número entero positivo y usa un bucle para invertirlo. Por ejemplo, si el usuario ingresa 12345, el programa debe devolver 54321. 

let numeros = prompt(`Ingrese un numero entero de dos o mas cifras`)


if (numeros !== null && numeros !== "" && parseInt(numeros) >= 0) {
    let invertido = ""

    for (let i = numeros.length - 1; i >= 0; i--) {
        invertido += numeros[i]
    }

    alert(`El numero invertido es ${invertido}`)
    

} else {
    alert(`Ingrese un numero entero positivo`)
}
