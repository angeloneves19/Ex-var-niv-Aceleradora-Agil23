/*12. Construa um algoritmo que leia um vetor com 20                                                                                    12. Construa um algoritmo que leia um vetor com 20
posições. Este vetor deverá conter apenas números inteiros e
positivos. Após ele deve permitir que o usuário informe um
valor para que o algoritmo verifique se este valor está presente
no vetor ou não. A interação com o usuário terminará quando
este informar um valor negativo
 */
//Primeiro criamos um array, armazenando 20 numeros aleatorios, para o usuario tentar acertar!
//Dai criamos uma estrutura while, pois no exercicio tinha que haver uma parada no exercicio!
//Depois criamos um prompt, com um parseInt englobando tudo, pois so poderia receber numeros positivos!
//Dai demos uma parada quando fosse menor que zero, pois no exercicio pedia a parada quando fosse numero negativo!
//Por fim, fazemos um if ternario no console.log!

let numeros = [ 1, 3, 5, 8, 9, 0, 665, 54, 2, 6, 21, 4, 654, 7, 22, 55, 66, 7, 45, 67]
let condicao = true
while (condicao) {
  let numerosUsuario = parseInt(prompt( `Descubra qual o numero que eu estou pensando(Numeros negativos param a contagem)`)) 
  const test =  numerosUsuario < 0 ? condicao = false : numeros.find(num => num === numerosUsuario) 
  console.log(test === numerosUsuario ? "acertou" : "tente novamente")
}

/*
let array = [ 1, 3, 5, 8, 9, 0, 665, 54, 2, 6, 21, 4, 654, 7, 22, 55, 66, 7, 45, 67]
let condicao = true
while (condicao) {
  let numeros = parseInt(prompt( Descubra qual o numero que eu estou pensando(Numeros negativos param a contagem) ))
  if (numeros < 0) {
    condicao = false
  }
  let encontrado = false;
  for (i = 0; i < array.length; i++) {
    if (array[i] === numeros) {
      encontrado = true
    }
  }
  if (encontrado) {
    console.log("acertou")
  } else {
    console.log("tente novamente")
  }
}
*/