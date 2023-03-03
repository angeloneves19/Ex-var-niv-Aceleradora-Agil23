/*
8. Faça um algoritmo que leia o nome, o custo e o preco
de venda de 50 produtos. Ao final deverá informar a
quantidade de produtos que:
a. Tem lucro menor que 10%;
b. Tem lucro entre 10% e 30%;
c. Tem lucro maior que 30%


let valor = 0
const produtos = []
const loja = (nome, custo, preco) => {
  return produtos.push({
    nome: nome,
    custo: custo,
    preco: preco
  })
}
loja("Nike Air Jordan 1", 300, 1500)///1200
loja("Nike Air Jordan 3", 400, 1600)///1200

//custo + porcentagem = valor
//preco - valor = resultado 

const porcentagem = (porcentagem) => {
  const porcentagemDeLucro = produtos.map(
   numero => ((numero.custo * porcentagem) / 100) + numero.preco - numero.custo) 
  return porcentagemDeLucro
}
//console.log(porcentagem(30))

//porcentagem(10)

if( porcentagem(10) > 0 ) {
  console.log('voce teve lucro maior que 10% do produto comprado')
}else if(porcentagem(30) > 0){
  console.log(`Ele tem 30%`)
}
*/

