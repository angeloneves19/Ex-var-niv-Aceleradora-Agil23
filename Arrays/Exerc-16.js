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

function bubbleSort() {
  const numeros = [0, 20, 17, 19, 33, 11, 100, 18, 10, 7, 8, 3, 2, 1, 14, 16, 15, 9]
  let result
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - (i-1); j++) {
      if (numeros[j] > numeros[j + 1]) {
        result = numeros[j + 1]
        numeros[j + 1] = numeros[j]
        numeros[j] = result
      }
    }
  } 
  return numeros
}
console.log(bubbleSort())
