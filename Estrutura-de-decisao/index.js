//Folha 2
//1
const adicao = (num1, num2) => {
let result = num1 + num2
result > 50 ? console.log(`Resultado é: ${result}`) : console.log(`Valor menor que 50 `)
}
adicao(50, 15)

//2
const venda = (valorUnitarioProduto, quantidadeVendida) => {
  let result = valorUnitarioProduto + quantidadeVendida;
  if(result > 100){
    console.log(`Bonificação de 10% para o vendedor!`)
  }else{
    console.log(`valor unitario mais unidade vendida : ${result}`)
  }
}
venda(100 , 3)

//3
const parOuImpar = (num) => {
    num % 2 === 0 ? console.log(`Par!`)  : console.log(`Impar!`)
}
parOuImpar(2)


