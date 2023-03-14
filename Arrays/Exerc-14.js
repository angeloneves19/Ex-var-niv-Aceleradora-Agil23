/*14. Faça um programa que leia um vetor A de 10 elementos contendo números inteiros.
  Determine e mostre, a seguir, quais elementos de A estão repetidos e quantas 
  vezes cada um se repete.*/
//Criamos um vetor(array), chamado de numeros, guardando numeros dentro do vetor.
//Criamos uma const global, com um numero de parametro.
//Criamos uma const chamada de result, passando vetor pelo filter,
//para filtrar somente o resultado desejado.
//Criamos resultadoFinal, que recebia .length diferente de zero,
//para quando passar por parametro um numero, que nao se encontrava no vetor passase zero,
// nao um array vazio!
//Dai passamos um If ternario, como verificação, se o numero repetisse, iria sair uma mensagem que o numero repetiu.
//Se nao iria sair outra dizendo que nao repetiu!
const numeros = [2, 3, 2, 4, 5, 6, 7, 7, 7, 5, 2]
const repetidorDeNumeros = (numero) => {
  const result = numeros.filter((num) => num === numero)
  const resultadoFinal =
    result.length !== 0
      ? `o numero que se repete é ${numero},repetiu um total de ${result.length}x`
      : `Este numero não esta no nosso banco de Dados`
  return resultadoFinal
}
console.log(repetidorDeNumeros(0))
