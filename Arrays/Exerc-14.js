/*14. Faça um programa que leia um vetor A de 10 elementos contendo números inteiros.
 Determine e mostre, a seguir, quais elementos de A estão repetidos e quantas 
 vezes cada um se repete.*/

let numeros = [2, 3, 2, 4, 5, 6, 7, 7, 7, 5, 2] // 2 = 3, 5 = 2, 7 = 3.
const repetidorDeNumeros = (numero) => {
const result = numeros.filter(num => num === numero)
return result
}
console.log(repetidorDeNumeros(5))
console.log(repetidorDeNumeros(2))
console.log(repetidorDeNumeros(3))
