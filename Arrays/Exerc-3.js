/* Faça um programa que preencha um vetor com oito números inteiros,
  calcule e mostre dois vetores resultantes. O primeiro deve conter os números positivos;
  o segundo deve conter os números negativos. Cada vetor resultante vai ter, no máximo,
    oito posições, que poderão não ser completamente utilizadas.*/

const vetorPositivo = [1, 3, 5, 7, 43, 4, 7, 9]
const vetorNegativo = []
//Criamos uma const mapeamento
const mapeandoArray = () =>{
    vetorPositivo.map(numero => vetorNegativo.push( (numero - numero) - numero))
    
}
mapeandoArray()
console.log(` Numeros positivos:
${vetorPositivo}
`)
console.log(` Numeros negativos:
${vetorNegativo}
`)

console.log(vetorPositivo)
console.log(vetorNegativo)
