const rl = require("node:readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  async function main() {
    const getSomeNumber = await new Promise(resolve =>
      rl.question("Digite um número: ", resolve)
    );
  
    const number = Number(getSomeNumber);
  
    if (number !== 0) {
      console.log("Esse número não é 0 (ZERO):", number);
    } else {
      console.log("Esse número é 0 (ZERO):", number);
    }
  
    rl.close();
  }
  
  main();
  

  /* Esse código está certo, mas não tem boa prática de programação, pois se o usuário entrar com algum caractere
     o programa irá dar um erro NaN - not a number, e num padrão internacional, isso deve ser tratado.
  */