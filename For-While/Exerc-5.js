//5 
//1)Construimos um programa, que recebia valores M e N.
//2)Depois criamos uma variavel nomeada de Contador, para contar os pares.
//3)Dai criamos a estrutura do For, para contar os numeros escolhidos.
//4)Dai perguntamos Se o resultado do resto de 2 for igual a zero é par.
//5)Caso a condição for true , colocamos o contador++, para contar quantos pares tem no resultado.
//6)Imprimos junto o resultado, uma mesangem no console.log,usando template string.
//7)E uma para o contador, tendo assim o resultado desejado no final!
const numerosPares = (m, n) => {
  let contador = 0
  for (let i = m; i < n; i++) {
    if (i % 2 == 0) {
      contador++
    console.log(`Numeros pares: ${i}`);
   }
  }
  console.log(`Tem ${contador} numeros pares`)
 }
numerosPares(0, 10)