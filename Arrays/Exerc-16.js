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



//exercicio 16 -vetores
let vetor = [4, 3, 10, 5, 19, 20, 17, 16, 1, 7, 9, 8, 0, 30, 29, 44, 31, 40, 50];
let indice = 0;
let vetorCrescente = [];
let menorNumero;
while (vetor.length > 0) {
  menorNumero = vetor[0];
  for (i = 0; i < vetor.length; i++) {
    if (vetor[i] <= menorNumero) {
      menorNumero = vetor[i];
      indice = i;
    }
  }
  vetorCrescente.push(menorNumero);
  vetor.splice(indice, 1);
}
//console.log(TESTANDO  ${vetor});
console.log(vetorCrescente);
console.log(`O elemento do vetor que apresenta o menor valor é ${vetorCrescente[0]}`)
*/

function bubbleSort() {
  const numeros = [0, 20, 17, 19, 33, 11, 100, 18, 10, 7, 8, 3, 2, 1, 14, 16, 15, 9]
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - (i-1); j++) {
      if (numeros[i] > numeros[i + 1]) {
        let result = numeros[i]
        numeros[i] = numeros[i + 1]
        numeros[i + 1] = result
      }
     }
  } 
}

bubbleSort()
