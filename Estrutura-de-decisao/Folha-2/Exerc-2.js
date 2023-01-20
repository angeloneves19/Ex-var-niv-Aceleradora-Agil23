//2
const venda = (valorUnitarioProduto, quantidadeVendida) => {
  let result = valorUnitarioProduto + quantidadeVendida;
  result > 100
    ? console.log(`Bonificação de 10% para o vendedor!`)
    : console.log(`valor unitario mais unidade vendida : ${result}`);
};
venda(100, 3);