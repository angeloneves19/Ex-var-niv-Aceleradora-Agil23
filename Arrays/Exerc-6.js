/*
Elabore um algoritmo que leia uma série de 50 notas e uma média necessária para aprovação,
calcule e mostre quantas notas estão em um intervalo de valores
que vai de 10% abaixo da média até 10% acima dela.
*/

const leitorDeMediasVetor = () => {
  let media = 6
  let contador = 0
  const vetorOriginal = [2, 3, 4, 5, 1, 6, 9, 10, 7, 8]
  const vetorRepetido = []
  for (let i = 0; i < 5; i++) {
    vetorRepetido.push(...vetorOriginal)
      let dezMenor = media - (media * 10) / 100
      let dezMaior = media + (media * 10) / 100
      if (vetorRepetido[i] > dezMenor && vetorRepetido[i] < dezMaior) {
        contador++
      }
      console.log(contador)
    }
  }
leitorDeMediasVetor()
