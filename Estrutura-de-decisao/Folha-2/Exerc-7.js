//7
const numeroMultiplicado = (num) => {
  var result =
    num % 3 === 0
      ? console.log(`É multiplo de 3`)
      : console.log(`Não é multiplo de 3`);
  return result;
};
numeroMultiplicado(9);