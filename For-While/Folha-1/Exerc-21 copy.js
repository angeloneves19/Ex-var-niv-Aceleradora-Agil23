//21
const numerosPrimos = (num) => {
  return num % 1 === 1  && num * num === 0
    ? `num nao é numero primo`
    : `este num é primo`
}
console.log(numerosPrimos(4))