const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//
//
console.log("Escolha uma opção:");
console.log("1 Iniciar Lição");
console.log("2 Fechar aplicativo");

r1.question("Digite o número da opção desejada: ", (resposta) => {
    // aqui se escolhe a linguagem
    switch (resposta.trim()) {
        case "1":
          console.log("Iniciando a lição...");
          // Aqui você pode chamar a função startLesson() ou qualquer outra lógica
          break;
        case "2":
          console.log("Encerrando o aplicativo. Até mais!");
          rl.close(); // substitua por `r1.close()` se estiver usando esse nome
          break;
        default:
          console.log("Opção inválida");
          // Pode perguntar de novo ou encerrar
          break;
    };

    // mostrar isso quando uma linguagem for escolhida
    console.log("\nEscolha um nível para jogar:");
    console.log("1🌎 Hello World");
    console.log("2📦 Variables");
    console.log("3🗃️ Types of Data");
    console.log("4☯️ True or False");
    console.log("5➕ Basic Operations");
    console.log("6♟️ Logic Operations");

    rl.question('Digite o número do nível: ', (nivel) => {
        switch (nivel.trim()) {
          case '1':
            require('./levels/level1')(rl, mainMenu);
            break;
          case '2':
            require('./levels/level2')(rl, mainMenu);
            break;
          case '3':
            require('./levels/level3_1')(rl, mainMenu);
            break;
          case '4':
            require('./levels/level3_2')(rl, mainMenu);
            break;
          case '5':
            require('./levels/level4')(rl, mainMenu);
            break;
          case '6':
            require('./levels/level5')(rl, mainMenu);
            break;
          case '0':
            console.log("Até logo!");
            rl.close();
            break;
          default:
            console.log("⚠️ Opção inválida!");
            setTimeout(mainMenu, 1500);
        }
      });
});
