// Array original (não ordenado)
const arrayExemplo = [0, 1, 4, 2, 90, 98, 12, 89, 23, 182, 9, 25, 3, 444, 99, 88, 77, 22, 45];

// A busca binária exige array ORDENADO
const ordenarArray = [...arrayExemplo].sort((a, b) => a - b);

let numeroEscolhido = 89;

// Índices inicial e final (limites da busca)
let inicio = 0;
let fim = ordenarArray.length - 1;

// Guarda o índice onde o número foi encontrado
let encontrouIndice = -1;

// Contador de buscas (quantas vezes olhamos o "meio")
let totalBuscas = 0;

// Loop da busca binária
while (inicio <= fim) {
  // Incrementa o contador a cada tentativa
  totalBuscas++;

  // Calcula o índice do meio
  let meio = Math.floor((inicio + fim) / 2);

  // Valor que está no meio do array
  let valorMeio = ordenarArray[meio];

  // Comparação
  if (valorMeio === numeroEscolhido) {
    encontrouIndice = meio; // achou o número
    break; // encerra o loop
  } else if (valorMeio < numeroEscolhido) {
    // Descarta a metade esquerda
    inicio = meio + 1;
  } else {
    // Descarta a metade direita
    fim = meio - 1;
  }
}

// Exibição dos resultados
console.log("Array ordenado:", ordenarArray);

if (encontrouIndice !== -1) {
  console.log(`Número ${numeroEscolhido} encontrado no índice: ${encontrouIndice}`);
  console.log(`Total de buscas realizadas: ${totalBuscas}`);
} else {
  console.log(`Número ${numeroEscolhido} não encontrado.`);
  console.log(`Total de buscas realizadas: ${totalBuscas}`);
}
