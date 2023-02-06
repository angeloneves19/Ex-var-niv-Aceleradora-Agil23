const somaValoresDigitados = () => {
  let contadorNumero = 0
  while (true) {
    let leNumero = parseInt(
      prompt("digite um numero (obs: -1 para a contagem")
    );
    if (leNumero == -1) {
      return false
    }
    if (leNumero > 0) {
     let result  = contadorNumero + leNumero
     console.log(result)
    }
  } 
 
}
console.log(somaValoresDigitados());

