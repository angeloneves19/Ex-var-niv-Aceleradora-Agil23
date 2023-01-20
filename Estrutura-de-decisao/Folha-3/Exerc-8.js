//8
const aumentoPercentual = (salario, aumentoEmPorcentagem) => {
  return ((salario * aumentoEmPorcentagem) / 100) + salario;
};
console.log(aumentoPercentual(2000, 25));