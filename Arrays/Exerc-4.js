/*
Desenvolva um algoritmo que permita a leitura de um vetor de 30 números inteiros,
e gere um segundo vetor com os mesmos dados, mas de maneira invertida, ou seja,
o primeiro elemento ficará na última posição, o segundo na penúltima, 
e assim por diante.
*/

const vetor = []
const vetorOrdemInvertida = []

const ordemInvertida  = () => {
  for(i = 1; i <= 30 ; i++) {
    vetor.push(i)
  } 
   vetor.map(numero => vetorOrdemInvertida.push(numero))
}
ordemInvertida()
console.log(vetor)
console.log(vetorOrdemInvertida.reverse())