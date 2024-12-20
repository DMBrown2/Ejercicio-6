//6. Crea un programa que use un bucle para generar un triángulo de asteriscos con la siguiente forma, donde el número de filas lo elija el usuario: 
// ***** 
// **** 
// *** 
// ** 

let filas = +prompt(`Ingrese un numero de filas`)


for (let i = filas; i > 0; i--) { 
    let linea = "" 

    for (let j = 0; j < i; j++) { 
      linea += "*"
    }
    
    document.write(`${linea} <br>`)
  }



