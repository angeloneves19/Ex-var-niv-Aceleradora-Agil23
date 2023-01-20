//5
const adicaoESubtracao = (num1, num2) => {
  let result = num1 + num2;
  return result > 20
    ? console.log(`Dados do valor, somando 8: ${result + 8}`)
    : console.log(`Dados do valor, subtraindo 5: ${result - 5}`);
};
adicaoESubtracao(10, 15);