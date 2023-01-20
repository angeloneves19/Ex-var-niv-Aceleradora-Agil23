//6
const raizQuadrada = (num) => {
  let calculoRaizQuadrada = num * 0.5;
  if (calculoRaizQuadrada >= 0) {
    console.log(calculoRaizQuadrada);
  } else if (calculoRaizQuadrada < 0) {
    console.log(calculoRaizQuadrada * calculoRaizQuadrada.toFixed(3));
  }
};
raizQuadrada(0);