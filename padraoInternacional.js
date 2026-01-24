const rl = require("node:readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  async function main() {
    const input = await new Promise(resolve =>
      rl.question("Input a valid number: ", resolve)
    );
  
    const number = Number(input);
  
    if (Number.isNaN(number)) {
      console.log("Inválid input - Please enter a valid number.")
    } else if (number === 0){
      console.log("The number is zero:", number)
    }
    else {
      console.log("The number is not zero:", number);
    }
  
    rl.close();
  }
  
  main();
  

  