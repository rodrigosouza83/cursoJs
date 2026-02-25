// Inicializamos o contador.
let i = 0;

// Variável de controle do loop.
// Enquanto for true, o while continua executando.
let siteOnline = true;

// O while aqui NÃO depende diretamente do i,
// mas sim da variável booleana "siteOnline".
while (siteOnline) {

    // Condição de parada:
    // Quando i chegar a 100, mudamos siteOnline para false.
    // Isso faz o while encerrar na próxima verificação.
    if (i === 100) {
        siteOnline = false;
    }

    // Exibe o valor atual de i.
    console.log(i);

    // Incrementa o contador para evitar loop infinito
    // e permitir que a condição de parada seja alcançada.
    i++;
}