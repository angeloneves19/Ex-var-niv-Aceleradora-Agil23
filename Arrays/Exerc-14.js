/*14. Faça um programa que leia um vetor A de 10 elementos contendo números inteiros.
  Determine e mostre, a seguir, quais elementos de A estão repetidos e quantas 
  vezes cada um se repete.*/

// let numeros = [2, 3, 2, 4, 5, 6, 7, 7, 7, 5, 2]
// const repetidorDeNumeros = () => {
//   for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] === numeros) {
//       console.log("repeti")
//     } else {
//       console.log("nao repeti")
//     }
//   }
// }
// console.log(repetidorDeNumeros())
 const numeros = [2, 3, 2, 4, 5, 6, 7, 7, 7, 5, 2]
const repetidorDeNumeros = (numero) => {
    const result = numeros.filter(num => num === numero)
    return `o numero que se repete é ${numero}, repetiu um total de ${result.length}x`
    
}
console.log(repetidorDeNumeros())