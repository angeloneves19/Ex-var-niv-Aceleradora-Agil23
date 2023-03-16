/*
17. Crie um algoritmo para ler um vetor de 15 posições
inteiras e o coloque em ordem crescente, utilizando como
estratégia de ordenação a comparação de pares de elementos
adjacentes, permutando-os quando estiverem fora de ordem,
até que todos estejam ordenados.
*/

function bubbleSort() {
  const numeros = [8, 1, 9, 1, 4, 1, 7, 6, 5, 8, 8]
  let temp
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - (i - 1); j++) {
      if (numeros[j] > numeros[j + 1]) {
        temp = numeros[j + 1]
        numeros[j + 1] = numeros[j] //o ultimo vira o primeiro!
        numeros[j] = temp
      }
    }
  }
  return numeros
}
console.log(bubbleSort())