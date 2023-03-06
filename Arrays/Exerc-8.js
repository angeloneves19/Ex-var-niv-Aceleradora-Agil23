/*
8. Faça um algoritmo que leia o nome, o custo e o preco
de venda de 50 produtos. Ao final deverá informar a
quantidade de produtos que:
a. Tem lucro menor que 10%;
b. Tem lucro entre 10% e 30%;
c. Tem lucro maior que 30%
*/

let valor = 0
const produtos = []
const loja = (nome, custo, preco) => {
  return produtos.push({
    nome: nome,
    custo: custo,
    preco: preco
  })
}
loja("Nike Air Jordan 1", 1300, 1500)///1200
loja("Nike Air Jordan 3", 1400, 1600)///1200

//custo + porcentagem = valor
//preco - valor = resultado 

const porcentagem = (porcentagem) => {
  const porcentagemDeLucro = produtos.map(
   numero => ((numero.custo * porcentagem) / 100) + numero.preco - numero.custo) 
  return porcentagemDeLucro
}
console.log(porcentagem(30).map(num => num > 0 ? 'voce tem um lucro de mais de 30 porcento'
 : 'voce tem um lucro menor'))
 console.log(porcentagem(10).map(num => num > 0 ? 'voce tem um lucro de mais de 10 porcento'
 : 'voce tem um lucro menor'))


