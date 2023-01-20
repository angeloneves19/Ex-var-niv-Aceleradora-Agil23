//15
const numeroVinteNoventa = (num) => {
  return num > 20 && num < 90
    ? `este valor esta entre 20 e 90`
    : `20 e 90 não estão na faixa de valores`;
};
console.log(numeroVinteNoventa(90));