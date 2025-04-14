const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainMenu() {
    console.log("\nEscolha um nível para jogar:");
    console.log("1 ☉ Olá, Mundo!"); //🌎
    console.log("2 ▣ Variáveis"); //📦
    console.log("3 ≣ Tipos de Dados"); //🗃️
    console.log("4 ◑ Verdadeiro ou Falso"); //☯️
    console.log("5 ✚ Operadores Básicos"); //➕
    console.log("6 ♞ Operadores Lógicos"); //♟️
    console.log("7 ♆ Condicionais"); //🎭
    console.log("8 ↻ Repetições"); //🔄
    console.log("9 ▣ Var, Let e Const"); //📦
    console.log("10 ▤ Vetores"); //📚
    console.log("11 ⚗ Operações Vetoriais"); //🩻	
    console.log("12 ⚙ Funções"); //⚙️
    console.log("13 ⊛ Objetos"); //💼
    console.log("14 ♣ Classes"); //🏷️
    console.log("15 ◯ Exceções"); //⭕
    console.log("0 ✖ Sair");

    r1.question('Digite o número do nível: ', (nivel) => {
        switch (nivel.trim()) {
            case '1':
                require('./levels/level1')(r1, mainMenu);
                break;
            case '2':
                require('./levels/level2')(r1, mainMenu);
                break;
            case '3':
                require('./levels/level3_1')(r1, mainMenu);
                break;
            case '4':
                require('./levels/level3_2')(r1, mainMenu);
                break;
            case '5':
                require('./levels/level4_1')(r1, mainMenu);
                break;
            case '6':
                require('./levels/level4_2')(r1, mainMenu);
                break;
            case '7':
                require('./levels/level5')(r1, mainMenu);
                break;
            case '8':
                require('./levels/level6')(r1, mainMenu);
                break;
            case '9':
                require('./levels/level7')(r1, mainMenu);
                break;
            case '10':
                require('./levels/level8_1')(r1, mainMenu);
                break;
            case '11':
                require('./levels/level8_2')(r1, mainMenu);
                break;
            case '12':
                require('./levels/level9')(r1, mainMenu);
                break;
            case '13':
                require('./levels/level10')(r1, mainMenu);
                break;
            case '14':
                require('./levels/level11_1')(r1, mainMenu);
                break;
            case '15':
                require('./levels/level11_2')(r1, mainMenu);
                break;
            case '0':
                console.log("Até logo!");
                r1.close();
                break;
            default:
                console.log("⚠️ Opção inválida!");
                setTimeout(mainMenu, 1500);
        }
    });
}

// Menu inicial
console.log("Escolha uma opção:");
console.log("1 ▶ Iniciar Lição");
console.log("2 ✖ Fechar aplicativo");

r1.question("Digite o número da opção desejada: ", (resposta) => {
    switch (resposta.trim()) {
        case "1":
            console.log("Iniciando a lição...");
            mainMenu();
            break;
        case "2":
            console.log("Encerrando o aplicativo. Até mais!");
            r1.close();
            break;
        default:
            console.log("Opção inválida");
            r1.close();
            break;
    }
});
