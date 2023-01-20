// //9
const programa = (salarioBase) => {
  let gratificacao = (salarioBase * 5) / 100 + salarioBase
  let imposto = (gratificacao * 7) / 100
  let result = gratificacao - imposto
  return `Seu salario final, é: ${result}`
};
console.log(programa(1300))
