/*12. Construa um algoritmo que leia um vetor com 20                                                                                    12. Construa um algoritmo que leia um vetor com 20
posições. Este vetor deverá conter apenas números inteiros e
positivos. Após ele deve permitir que o usuário informe um
valor para que o algoritmo verifique se este valor está presente
no vetor ou não. A interação com o usuário terminará quando
este informar um valor negativo
 */

let array = []
let condicao = true
  while (condicao) {
    if(i > 0){
      let numeros = parseInt(prompt('Descubra como o numero que eu estou pensando (voce digitou ' + i + ' numeros'))
      array.push(numeros)
    }  
    if(numeros === -1){
      condicao = false
    } 
  }
  
console.log(array)