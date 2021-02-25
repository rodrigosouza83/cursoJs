const nome = 'Rodrigo Carlos';
const sobrenome = 'Souza'
const idade = 37;
const peso = 97.35;
const altura = 1.81;
const anoCorrente = 2021;

let imc = peso / (altura * altura);

let anoNascimento = anoCorrente - idade;
let anoProvavelNasc = anoCorrente - idade -1;

console.log(`${nome}, seu índice de massa corporal é de ${imc}.`)
console.log(`${nome}, provavelmente você nasceu entre os anos de ${anoProvavelNasc} e ${anoNascimento}.`)