//6
const dividir2 = (numerador, denominador) => {
  if(denominador === 0){
       denominador = 3
  }
  let result = numerador / denominador;
  console.log(result);
}
dividir2(15, 3)