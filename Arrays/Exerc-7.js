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



const trasformandoEmVetor = []
const produtoDaLoja = (nome, valor) =>{
    return trasformandoEmVetor.push(
    {
        id: trasformandoEmVetor.length + 1,
        nome: nome,
        valor: valor,
        ganhoDoVendedor: valor * 5 / 100
    })
}
produtoDaLoja("Lampada Magica", 359)
produtoDaLoja("Sino", 219.05)
produtoDaLoja("Escultura", 1867)
produtoDaLoja("Piramide", 80.90)
produtoDaLoja("Nicho Budista", 76.60)
produtoDaLoja("Fonte de água", 206.30)
produtoDaLoja("Escultura Girafa", 163.86)
produtoDaLoja("Escultura Galinha", 39.90)
produtoDaLoja("Bonecas Camponesas", 113.90)
produtoDaLoja("Ganesha Bronze", 1140)
const 
trasformandoEmVetor.find(produtos => produtos.id === 6)