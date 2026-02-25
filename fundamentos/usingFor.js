// O "i" é o contador do loop.
// Pense nele como um "marcador" que controla quantas vezes o for vai repetir.
// Aqui ele representa o número atual que estamos imprimindo, e também serve
// para o loop saber quando deve parar.

for (let i = 1; i <= 10; i++) {
    // ✅ 1) INICIALIZAÇÃO (acontece 1 vez só, antes do loop começar):
    // let i = 1
    // - Criamos a variável i e começamos com 1.
    // - Isso define o "ponto de partida" do percurso.
    // - Se fosse i = 0, ele começaria do 0. Se fosse i = 5, começaria do 5.
  
    // ✅ 2) CONDIÇÃO (é checada ANTES de cada repetição):
    // i <= 10
    // - Antes de entrar no bloco, o JS pergunta: "i ainda é menor ou igual a 10?"
    // - Se for TRUE (verdadeiro), ele entra e executa o bloco.
    // - Se for FALSE (falso), ele para o loop e sai.
  
    // ✅ 3) BLOCO (o que você quer repetir):
    // console.log(i)
    // - Aqui você usa o i atual.
    // - Na 1ª vez, i vale 1 → imprime 1
    // - Na 2ª vez, i vale 2 → imprime 2
    // - ...
    // - Na 10ª vez, i vale 10 → imprime 10
    console.log(i);
  
    // ✅ 4) INCREMENTO (acontece NO FINAL de cada repetição):
    // i++
    // - Depois de executar o bloco, o JS soma 1 no i (i = i + 1).
    // - Isso faz o i "andar" para o próximo número, percorrendo a sequência.
    // - Esse passo é o que faz o loop avançar; sem isso, ele ficaria preso no mesmo valor.
    // - Ex.: i=1 → vira 2 → vira 3 → ... → vira 10 → vira 11
  }
  
  // 📌 Como o i "percorre" na prática:
  // Começa: i = 1
  // Checa: 1 <= 10 (true) → imprime 1 → i++ → i = 2
  // Checa: 2 <= 10 (true) → imprime 2 → i++ → i = 3
  // ...
  // Checa: 10 <= 10 (true) → imprime 10 → i++ → i = 11
  // Checa: 11 <= 10 (false) → para o loop
  
  // Resultado: ele percorre e imprime do 1 até o 10, porque:
  // - começa em 1,
  // - continua enquanto i <= 10,
  // - e avança 1 por vez com i++.