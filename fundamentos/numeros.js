const peso1 = 1.0
const peso2 = Number ('2.0') // sem o Number, a constante deixar de ser do tipo Inteiro e vira String.

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // método irá checar se o valor de peso1 é do tipo inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 8.9
const avaliacao2 = 5.5

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))// o método toFixed elimina as casas decimais (2) reforça que só teremos 2 números após a casa decimal.
console.log(media.toString(2)) // Exibe o numero de forma BINÁRIA
console.log(typeof media) // Irá mostrar que a constante média é do tipo Number.