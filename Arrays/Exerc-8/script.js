/*
8. Faça um algoritmo que leia o nome, o custo e o preco
de venda de 50 produtos. Ao final deverá informar a
quantidade de produtos que:
a. Tem lucro menor que 10%;
b. Tem lucro entre 10% e 30%;
c. Tem lucro maior que 30%
*/

//-Criamos os vetores para armezar os prompts .
//-Criamos o contador para passarmos os valores e armazenalos nos vetores.
//-Criamos as porcentagens de 10 e 30 para somar com o custo da compra.
//E passar no console .
let vetorItem = []
let vetorValorCompra = []
let vetorLucro = []

for (let i = 0; i < 2; i++) {
  let nomeProduto = prompt("Qual é o nome do item ?")
  let custoDeCompra = Number(prompt("Quanto voce Pagou por Este Item?"))
  let lucroDeVenda = Number(prompt("Por Quanto voce vai vender este item?"))
  vetorItem.push(nomeProduto)
  vetorValorCompra.push(custoDeCompra)
  vetorLucro.push(lucroDeVenda)

  let porcentagemDeDez = (custoDeCompra * 10) / 100 + custoDeCompra
  let porcentagemDeTrinta = (custoDeCompra * 30) / 100 + custoDeCompra
  let resultadoLucroDez = lucroDeVenda - porcentagemDeDez
  let resultadoLucroTrinta = lucroDeVenda - porcentagemDeTrinta
  console.log(`Lucro 10%; ${resultadoLucroDez}`)
  console.log(`Lucro 30%; ${resultadoLucroTrinta}`)
 }
// console.log(vetorItem)
// console.log(vetorValorCompra)
// console.log(vetorLucro)
