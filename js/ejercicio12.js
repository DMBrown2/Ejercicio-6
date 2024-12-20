// 12. Crea un programa que genere un número aleatorio entre 1 y 10. Luego usa un bucle para permitir al usuario adivinar el número. Si el usuario adivina correctamente, felicítalo y detén el bucle. Si no, indica si el número que ingresó es mayor o menor al número generado. 


function adivinaElNumero() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1
    let intentos = 4

    while (intentos > 0) {
        let guess = parseInt(prompt("Adivina el número entre 1 y 10:"));
        
        if (isNaN(guess) || guess < 1 || guess > 10) {
            alert("Por favor, ingresa un número válido entre 1 y 10.");
            continue
        }

        if (guess === numeroSecreto) {
            alert("¡Felicidades! Adivinaste el número.");
            return
        } else if (guess > numeroSecreto) {
            alert(`Incorrecto, en numero ingresado es mayor que el numero ganador. Intentalo nuevamente.`)
        } else {
            alert(`Incorrecto, en numero ingresado es menor que el numero ganador. Intentalo nuevamente`)
        }

        intentos--

        if(intentos === 0) {
            alert(`Lo siento, te quedaste sin intentos. El número secreto era ${numeroSecreto}.`)
        }
    }

}

adivinaElNumero()

