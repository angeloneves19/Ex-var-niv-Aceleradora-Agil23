const somaValoresDigitados = () => {
  let contadorNumero = 0
  let condicao = true
  while (condicao) {
    let leNumero = parseInt(
      prompt("digite um numero (obs: -1 para a contagem")
    )
    if (leNumero == -1) {
      condicao = false
    }
    if (leNumero > 0) {
      contadorNumero = contadorNumero + leNumero
    }
  }
  return `Soma de todos o numero digitados: ${contadorNumero}`
  
}
console.log(somaValoresDigitados())

