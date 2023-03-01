/*
7. Uma pequena loja de artesanato possui apenas um
vendedor e comercializa dez tipos de objetos. O vendedor
recebe um salário de R$ 400,00 acrescido de 5% do valor total
de suas vendas. O valor unitário dos objetos deve ser
informado e armazenado em um vetor; a quantidade vendida
de cada peça deve ficar em outro, mas na mesma posição, e o
código do produto deve ficar em um terceiro vetor, sempre
respeitando as posições. Crie um programa que receba o
código, o preço e quantidade vendida, armazenando-os em
seus respectivos vetores, determine e mostre:

a. Um relatório contendo o código, a quantidade o valor
unitário, e o valor total vendido para cada objeto. Ao
final deverá ser mostrado o valor geral das vendas e o
valor da comissão que será paga ao vendedor.

b. O código e o valor do objeto mais vendido (não se
preocupe com empates).
*/

//Primeiro criamos uma variavel global chamada de trasformando vetor(array), para trasformar os numeros em vetor(array)!
///Depois criamos o postProduct, para catalogar cada produto em ordem utilizando objetos,
// e com seus devidos valores utilizando return para retornar tudo!
//Dai criamos o objeto carrinho com vetor(array) vazio por que? Para tornalos vetores(arrays)!
//Dai no Product tornamos todos os produtos em vetores(array)
//Dai na variavel ganhoPorPorcentagemProduto, somamos todos os produtos vendidos, e no final acresentamos o salario do vendedor,
// para termos uma deia de quanto ele ganharia no final do mês, de acordo com suas comissões,
//Também fizemos a soma do produtos divido pela contidade para sabermos qual valor seria gasto na loja,
//E quanto o vendedor ganharia de comissão.
//Em seguida puxamos tudo do carrinho utilizando metodo push numa estrtura de objetos!
//Por fim passamos tupo por console.log utlizando templet string, tendo o resultado desejado no terminal!
//E bem no finalzinho mesmo criamos o quantidade maior, para absorver, a compra com maior quantidade da loja!
//Dai passamos no console.log chamando cada obejeto, ulizando templat string, e passando no terminal, o que pedia no exercicio!
let comissao = 0 
const trasformandoEmVetor = []
const postProduct = (nome, valor) => {
  return trasformandoEmVetor.push({
    id: trasformandoEmVetor.length + 1,
    nome: nome,
    valor: valor,
    ganhoDoVendedor: (valor * 5) / 100,
  })
}
postProduct("Lampada Magica", 359)
postProduct("Sino", 219.05)
postProduct("Escultura em ouro", 1867)
postProduct("Piramide", 80.9)
postProduct("Nicho Budista", 76.6)
postProduct("Fonte de água", 206.3)
postProduct("Escultura Girafa", 163.86)
postProduct("Escultura Galinha", 39.9)
postProduct("Bonecas Camponesas", 113.9)
postProduct("Ganesha Bronze", 1140)

const carrinho = []
const getProduct = (nameProduct, amount) => {
  const Product = trasformandoEmVetor.find(
    (products) => products.nome === nameProduct
  )
  const ganhoPorPorcentagemProduto = (Product.valor * amount * 5) / 100
  comissao += ganhoPorPorcentagemProduto
  let salarioFinal = comissao + 400
  let totalProdutos = Product.valor * amount

  carrinho.push({
    id: Product.id,
    nome: nameProduct,
    valor: Product.valor * amount,
    quantidade: amount,
  })
  console.log(`-------------via-cliente----------------------`)
  console.log(`Total De compras: R$ ${totalProdutos.toFixed(2)}`)
  console.log(
    `Comissão do vendedor: R$ ${ganhoPorPorcentagemProduto.toFixed(2)}`
  )
  console.log(`-------------via-funcionario------------------`)
  console.log(`Salario com adicionais do cliente ${salarioFinal.toFixed(2)}`)
}
getProduct("Bonecas Camponesas", 4)
getProduct("Sino", 2)
getProduct("Escultura em ouro", 3)
getProduct("Fonte de água", 2)

const quantidadeMaior = carrinho
  .map( pro => pro.quantidade )
  .sort()
  .pop()
  const result = carrinho.find(produto => produto.quantidade === quantidadeMaior)
 console.log( `
 O produto ${result.nome} do codigo N°${result.id} no valor de R$ ${result.valor} 
 foram o mais vendidos, com a quantidade de ${result.quantidade} peças`
 )
