/*
Elabore um algoritmo que leia uma série de 50 notas e uma média necessária para aprovação,
calcule e mostre quantas notas estão em um intervalo de valores
que vai de 10% abaixo da média até 10% acima dela.
*/
//Criamos um programa para passar tudo!
//Depois criamos uma variavel, guardando a média 6, que deduzimos!
//Depois criamos uma variavel, chamada de contador para contar as alunas que passaram!
//Depois criamos um array fazio, e outro array com numeros.
//Dai criamos um for, para percorer o array.
//Dai somamos para descobrir quem passou, utilzando o If.
//E por fim, usamos o contador  para contar quantas pessoas passaram!

const leitorDeMediasVetor = () => {
  let media = 6
  let contador = 0
  let vetorRepetido = []
  const vetorOriginal = [2, 3, 4, 5, 1, 6, 9, 10, 7, 8, 2, 3, 4, 5, 1, 6, 9, 10, 7, 8, 2, 3, 4, 5, 1, 6, 9, 10, 7, 8]
  for (let i = 0; i < vetorOriginal.length; i++) {
    vetorRepetido.push(...vetorOriginal)
      let dezMenor = media - (media * 10) / 100
      let dezMaior = media + (media * 10) / 100
      if (vetorRepetido[i] >= dezMenor && vetorRepetido[i] <= dezMaior) {
        contador++
      }
    }
    console.log(contador)
  }
leitorDeMediasVetor()