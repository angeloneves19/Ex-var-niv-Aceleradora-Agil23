/*
5)Faça um programa que preencha dois vetores de dez 
elementos numéricos cada um e mostre o vetor resultante da 
intercalação deles.
*/

const vetor = []
const vetor2 = []

const doisVetores = (numero1, numero2) => {
  for (i = 1; i <= numero1; i++) {
    vetor.push(i)
  }
  console.log(vetor)
  for (i = 10; i <= numero2; i++) {
    vetor2.push(i)
  }
  console.log(vetor2)
  return vetor.concat(vetor2)
}
console.log(doisVetores(10, 20))
