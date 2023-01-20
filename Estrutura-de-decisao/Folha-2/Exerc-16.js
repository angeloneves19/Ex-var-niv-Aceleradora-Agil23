//16
const igualOuNao = (num) => {
  if (num === 5) {
    console.log(`O numero é igual, a 5`);
  }
  if (num === 200) {
    console.log(`O numero é igual, a 200!`);
  } else if (num === 400) {
    console.log(`O numero é igual, a 400!`);
  } else if (num > 500 && num < 1000) {
    console.log(` Está no intervalo, entre 500 a 1000!`);
  } else {
    console.log(`Ele está, fora dos escopos, anteriores!`);
  }
};
igualOuNao(1000);