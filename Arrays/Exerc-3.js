/* Faça um programa que preencha um vetor com oito números inteiros,
  calcule e mostre dois vetores resultantes. O primeiro deve conter os números positivos;
  o segundo deve conter os números negativos. Cada vetor resultante vai ter, no máximo,
    oito posições, que poderão não ser completamente utilizadas.*/

  //-Criamos dois vetores, um contendo 8 numero inteiros e outro um vetor vazio
  //-Criamos uma arrow function contendo um mapeamento do vetor positivo e
  //adiocionado o valor ao vetor negativo
  //-chamamos a funcao e passamos os dois vetores no console.log.
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




// let vetor = [];
// let numerosPositivos = [];
// let numerosNegativos = [];


// const myFunc = () => {
//   for (i = 1; i <= 8; i++) {
//     let leNumero = parseInt(prompt(`Digite 1 numero por favor`));
//     vetor.push(leNumero);
//   }
//   if (leNumero < 0) {
//     numerosPositivos.push(leNumero)
//   } else {
//     numerosNegarivos.push(leNumero)
//   }
// }
// myFunc();
// console.log(numerosPositivos);
