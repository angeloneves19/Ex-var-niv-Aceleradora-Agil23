/*
16. Desenvolva um algoritmo que leia um vetor de 20
posições inteiras e o coloque em ordem crescente, utilizando a
seguinte estratégia:
i. Selecione o elemento do vetor de 20 posições que
apresenta o menor valor;
ii. Troque este elemento pelo primeiro;
iii. Repita estas operações envolvendo agora apenas os 19
elementos restantes (trocando o de menor valor com a
segunda posição), depois os 17, os 16 e assim por
diante, até restar um único elemento, o maior deles.
*/
//Primeiro criamos uma função global, para passar tudo!
//Depois criamos um array(numeros), que guardava os numeros desejados!
//Depois criamos  uma variavel chamada de temporario, pois era guardando o menor ali,
// para passar o maior para o lugar do menor em sentido horario!
//Dai criamos o primero for, para contar o array inteiro!
//Em seguida entrava no segundo dai fazia a conta,  para entrar no primeiro array,
// depois se nao fosse maior, fazia a mesma conta dai entrando no if!
//Assim por diante, guardando na varivel, e passando o maior para trás, em sentdo horario.
//Até o fim, metodo usado bubbleSort!

function bubbleSort() {
  const numeros = [0, 20, 17, 17, 17, 11, 100, 18, 10, 7, 8, 3, 2, 1, 14, 16, 15, 9, 4, 12]
  let temporario
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - (i-1); j++) {
      if (numeros[j] > numeros[j + 1]) {
        temporario = numeros[j + 1]
        numeros[j + 1] = numeros[j]
        numeros[j] = temporario
      }
    }
  } 
  return numeros
}
console.log(bubbleSort())
