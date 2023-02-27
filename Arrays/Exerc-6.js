/*
Elabore um algoritmo que leia uma série de 50 notas e uma média necessária para aprovação,
calcule e mostre quantas notas estão em um intervalo de valores
que vai de 10% abaixo da média até 10% acima dela.
*/

const vetorOriginal = [2, 3, 4, 5, 5, 6, 6, 10, 7, 8]
const vetorRepetido = []
let soma = 0
for (let i = 0; i < 5; i++) {
  vetorRepetido.push(...vetorOriginal)
  for (let i = 0; i < vetorRepetido.length; i++) {
    soma += vetorRepetido[i]
  }
}
console.log(soma)
let media = soma / vetorRepetido.length
console.log(media)
