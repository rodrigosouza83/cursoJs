const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro valor: ", (valor1) => {
    rl.question("Digite o segundo valor: ", (valor2) => {

        const number1 = Number(valor1)
        const number2 = Number(valor2)

        if (number1 > number2 && number1 != number2) {

            console.log("O número 1 é maior que o número 2")
        }

        else if (number1 === number2) {

            console.log("Os números digitados, são iguais")

        }
        else {

            console.log("O primeiro número digitado, não é maior que o número 2")
        }


        rl.close();
    });
});