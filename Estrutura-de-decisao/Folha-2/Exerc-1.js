//1
const adicao = (num1, num2) => {
  let result = num1 + num2;
  result > 50
    ? console.log(`Resultado é: ${result}`)
    : console.log(`Valor menor que 50 `);
};
adicao(50, 15);