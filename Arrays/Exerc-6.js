/*
Elabore um algoritmo que leia uma série de 50 notas e uma média necessária para aprovação,
calcule e mostre quantas notas estão em um intervalo de valores
que vai de 10% abaixo da média até 10% acima dela.

let algoritmo = [10, 7, 7, 8, 5, 1, 3, 6.4, 2, 0, 3, 10, 9, 2, 9, 8, 7, 1, 1, 0, 5, 4, 4, 2, 1, 0, 9, 6.6, 5, 8, 10, 1, 7, 9, 8, 4, 1, 5, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let media = 7
let valorInicial = media - (media * 10) / 100
let valorFinal = media + (media * 10) / 100
let contador = 0

for (i = 0; i < algoritmo.length; i++) {
  if (algoritmo[i] > valorInicial && algoritmo[i] < valorFinal) {
    contador++
  }
}
console.log(contador)
*/

let media = 6
let contador = 0
const vetorOriginal = [2, 3, 4, 5, 1, 6, 9, 10, 7, 8]
const vetorRepetido = []
for (let i = 0; i < 5; i++) {
  vetorRepetido.push(...vetorOriginal)
  let dezMenor = media - (media * 10) / 100
  let dezMaior = media + (media * 10) / 100;
  for (let j = 0; j < vetorRepetido.length; j++) {
    contador++
    if (vetorRepetido[j] > dezMenor && vetorRepetido[j] < dezMaior) {
      
    }
    console.log(vetorRepetido / contador)
  }

  //console.log(vetorRepetido)
}
