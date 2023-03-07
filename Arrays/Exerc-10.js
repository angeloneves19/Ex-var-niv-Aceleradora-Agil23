/*
10. Faça um programa que preencha um vetor com dez
números inteiros, determine e mostre os números superiores a
cinqüenta e suas respectivas posições. O programa deverá mostrar 
uma mensagem se não existir nenhum número que
atenda a esta condição.
*/
//-Criamos um vetor com 10 numeros aleatorios.
//-passamos por console um mapeamento  do vetor passando um template string num if ternario sabermos os valores maiores que 50
//e chamarmos o vetor e sua posicao por o metodo indexOf().
const vetor = [10, 130, 200, 100, 38, 29, 34, 8, 29, 500]
console.log(
  vetor.map((num) =>
    num > 50
      ? `${vetor.indexOf(num)} Maior que 50!`
      : `${vetor.indexOf(num)} Menor que 50!`
  )
)
