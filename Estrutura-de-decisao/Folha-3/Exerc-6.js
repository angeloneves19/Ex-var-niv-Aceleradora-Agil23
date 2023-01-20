//6
const loja = (valorEtiqueta, parcelas) => {
  let Avista = valorEtiqueta - (valorEtiqueta * 10) / 100;
  let duasParcelas = valorEtiqueta;
  let quatroParcelas = valorEtiqueta + (valorEtiqueta * 5) / 100;
  if (parcelas === 0 || parcelas === 1) {
    console.log(`${Avista}`);
  }
  if (parcelas === 2) {
    console.log(`${duasParcelas}`);
  }
  if (parcelas === 4) {
    console.log(`${quatroParcelas}`);
  } else {
    return console.log(`Não temos como parcerlar este valor !!!`);
  }
};
loja(100, 5);
