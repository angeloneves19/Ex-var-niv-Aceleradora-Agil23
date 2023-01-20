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
