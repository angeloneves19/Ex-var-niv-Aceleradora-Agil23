//Folha 2
//1
const adicao = (num1, num2) => {
  let result = num1 + num2;
  result > 50
    ? console.log(`Resultado é: ${result}`)
    : console.log(`Valor menor que 50 `);
};
adicao(50, 15);

//2
const venda = (valorUnitarioProduto, quantidadeVendida) => {
  let result = valorUnitarioProduto + quantidadeVendida;
  result > 100
    ? console.log(`Bonificação de 10% para o vendedor!`)
    : console.log(`valor unitario mais unidade vendida : ${result}`);
};
venda(100, 3);

//3
const parOuImpar = (num) => {
  num % 2 === 0 ? console.log(`Par!`) : console.log(`Impar!`);
};
parOuImpar(2);

//4
const positivoNegativoOuNulo = (num) => {
  if (num > 0) {
    console.log(`POSITIVO`);
  } else if (num < 0) {
    console.log(`NEGATIVO`);
  } else {
    console.log(`NULO`);
  }
};
positivoNegativoOuNulo(-8);

//5
const adicaoESubtracao = (num1, num2) => {
  let result = num1 + num2;
  return result > 20
    ? console.log(`Dados do valor, somando 8: ${result + 8}`)
    : console.log(`Dados do valor, subtraindo 5: ${result - 5}`);
};
adicaoESubtracao(10, 15);

//6
const raizQuadrada = (num) => {
  let calculoRaizQuadrada = num * 0.5;
  if (calculoRaizQuadrada >= 0) {
    console.log(calculoRaizQuadrada);
  } else if (calculoRaizQuadrada < 0) {
    console.log(calculoRaizQuadrada * calculoRaizQuadrada.toFixed(3));
  }
};
raizQuadrada(0);

//7
const numeroMultiplicado = (num) => {
  var result =
    num % 3 === 0
      ? console.log(`É multiplo de 3`)
      : console.log(`Não é multiplo de 3`);
  return result;
};
numeroMultiplicado(9);

//8
const divisivel = (a, b) => {
  let result = a % b;
  if (result === 0) {
    console.log(`resultado igual a : ${result} `);
  } else {
    console.log(`O resultado não divisivel por B`);
  }
};
divisivel(18, 3);

//9
const MaiorOuMenor = (a, b) => {
  a > b
    ? console.log(`Valor do A:${a}, é maior que o B:${b}`)
    : console.log(`Valor do B:${b}, é maior que o valor do A:${a}`);
};
MaiorOuMenor(12, 6);

//10
const emprestimoConsignado = (valorPrestacao, salarioBruto) => {
  let porcentagemSalarial = (salarioBruto * 30) / 100;
  if (valorPrestacao <= porcentagemSalarial) {
    console.log(`seu emprestimo foi aprovado`);
  } else {
    return console.log(`seu emprestimo não foi aprovado`);
  }
};
emprestimoConsignado(120, 1302);
