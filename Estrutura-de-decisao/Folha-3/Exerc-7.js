//7
const aumentoSalarial = (salarioFuncionario) => {
  // aumento de 25 %
  const aumento = (salarioFuncionario * 25) / 100;
  return `o funcionario recebeu um aumento de 25% ficando com ${
    salarioFuncionario + aumento
  }$`;
};
console.log(aumentoSalarial(2000));