function level1(rl, returnToMenu) {
    console.clear();
    console.log('👋 Bem-vindo ao Level 1!');
  
    rl.question('Como se diz "Olá Mundo" em inglês? ', (resposta) => {
      if (resposta.trim().toLowerCase() === 'hello world') {
        console.log('✅ Correto!');
      } else {
        console.log('❌ O correto é: "Hello World"');
      }
  
      setTimeout(returnToMenu, 2000);
    });
  }
  
  module.exports = level1;