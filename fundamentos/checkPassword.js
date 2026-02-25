const userPassword = '123321'

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Entre com a senha de usuário: ", (password) => {

    if (userPassword === password.trim()) {

        console.log("ACESSO LIBERADO")
    }

    else {

        console.log("SENHA INVÁLIDA")
    }


    rl.close();
});