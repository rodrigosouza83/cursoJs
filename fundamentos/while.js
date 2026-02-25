// ✅ 1) Criamos a variável i fora do while.
// O "i" é o contador do loop: ele controla quantas vezes o código vai repetir.
// No while, a gente precisa preparar esse contador ANTES, porque:
// - o while NÃO tem o campo de inicialização como o for (for tem: inicialização; condição; incremento).
// - o while aceita apenas UMA condição booleana dentro dos parênteses.
//
// Aqui começamos com i = 0, ou seja: vamos contar a partir do zero.
let i = 0;

// ✅ 2) O while recebe apenas UMA condição booleana.
// Ele funciona assim: "ENQUANTO essa condição for verdadeira, repita o bloco".
//
// A cada volta, o JavaScript checa novamente: i < 10 ?
// - Se for TRUE, ele entra no bloco.
// - Se for FALSE, ele sai do loop.
while (i < 10) {

    // ✅ 3) Corpo do loop: o que será repetido.
    // Esse console.log vai executar várias vezes, uma vez por iteração,
    // enquanto a condição (i < 10) continuar verdadeira.
    console.log("Teste Executado com sucesso");

    // ✅ 4) Atualização manual do contador (o "avanço" do loop).
    // No while, NÃO existe um "i++" automático como no for,
    // então nós precisamos aumentar i manualmente para o loop progredir.
    //
    // i++ significa: i = i + 1
    // Isso faz o i "andar" para o próximo valor, e impede que o loop fique infinito.
    i++;
}

// 🔎 Debug mental (como o i percorre):
// Começo: i = 0
// Checa: 0 < 10 (true) → executa o bloco → i++ → i vira 1
// Checa: 1 < 10 (true) → executa o bloco → i++ → i vira 2
// ...
// Checa: 9 < 10 (true) → executa o bloco → i++ → i vira 10
// Checa: 10 < 10 (false) → para e sai do while
//
// ✅ Resultado: o bloco roda 10 vezes (com i indo de 0 até 9).
//
// ⚠️ Erro clássico (loop infinito):
// Se você esquecer o i++,
// i vai ficar sempre 0, a condição (0 < 10) sempre será true,
// e o while nunca vai parar.