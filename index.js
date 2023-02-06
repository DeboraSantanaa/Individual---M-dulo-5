import readlineSync from "readline-sync";
import chalk from "chalk";

const propriedades = [];

// Exibe a mensagem que o usuário precisa inserir para encerrar o programa.
console.log(chalk.cyan("Para encerrar o programa digite 'sair'."));

// Loop  que vai receber as propriedades do CSS
while (true) {
  const inserir = readlineSync.question(
    chalk.blue("Digite uma Propriedade do CSS: ")
  );

  if (inserir.toUpperCase() === "SAIR") {
    break;
  }

  /* Verifica se existe duplicidade nas propriedades inseridas e 
  informa para o usuario sobre a duplicidade */

  if (propriedades.includes(inserir)) {
    console.log(chalk.bgRed(`A propriedade "${inserir}" já foi inserida.`));
  } else {
    // Adiciona a propriedade
    propriedades.push(inserir);
  }
}

// Ordena as propriedades em ordem crescente
propriedades.sort();

// Exibe as propriedades para o usuário no terminal
console.log(chalk.cyan("Propriedades do CSS:"));
console.log(propriedades.map((p) => chalk.magenta(p.toUpperCase())).join("\n"));
