//10. Escribe un programa que recorra un array de edades [18, 25, 14, 32, 16, 40] usando un bucle y clasifique cada edad como "Mayor de edad" o "Menor de edad". Imprime cada edad con su clasificación. 


const edades = [18, 25, 14, 32, 16, 40]

for(edad of edades) {
    // console.log(edad)

    if(edad < 18)
        document.write(`${edad} = Menor de edad <br>`)

    if(edad >= 18)
        document.write(`${edad}= Mayor de edad <br>`)
}


