/*
5)Faça um programa que preencha dois vetores de dez 
elementos numéricos cada um e mostre o vetor resultante da 
intercalação deles.
*/

//-criamos dois vetores vazios globais para armazenar seus devidos valores abaixo dados.
//-criamos nossa funcao passando for, dedusimos um numero de parada nos parametros,
//armazenando nos vetores usando o .push para empurrando eles dentro do vetor.
//-retornamos o primeiro vetor concatenando com o segundo utilizando o metodo .contat
//-passamos a funcao no console dando o valor dos paramentros.
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
