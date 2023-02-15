//22
//Primeiro criamos uma variavel global, para imprimir o resultado na tela!
//Depois criamos um laço  For, para descobrir o   Quociente de acordo, 
//com os numeros digitados pelo usuario!
//Então dentro do For, criamos um variavel chamada de i,
//que recebia o valor do dividendo digitada pelo usuario!
//Depois dizemos enquanto i(dividendo escolido pelo usuario!)  for menor que o zero, continua rodando o loop!
//E depois dizemos pega o i(dividendo escolido pelo usuario), e diminua pelo divisivel(escolhido pelo usuario para diminuir o i) 
//e diminua até chegar no ultimo numero uqe podia ser divdido!
//E por fim, imprima tudo no console.log!

const subtracaoQuocienteInteiro = (dividendo, divisivel) => {
  for (let i = dividendo ; i > 0; i-=divisivel) {
    console.log(i)
  }
}
subtracaoQuocienteInteiro(100, 12)
