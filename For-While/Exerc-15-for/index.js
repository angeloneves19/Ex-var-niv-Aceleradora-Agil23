const mediaParOuImpar = () => {
  let condicao = true
  let contadorDeNumerosPares = 0
  let contadorDeNumerosImpares = 0
  while (condicao) {
    let leNumero = prompt(
      "Digite um numero: (obs: Digite 0, para parar a contagem!"
    )
    if (leNumero > 0) {
      leNumero % 2 === 0
        ? contadorDeNumerosPares++
        : contadorDeNumerosImpares++
    }
  }
  if (leNumero == 0) {
    condicao = false
  }

return `
Existem ${contadorDeNumerosPares} numeros Pares, nessa funcão
Existem ${contadorDeNumerosImpares} numeros Impares, nessa funcão
`
}
console.log(mediaParOuImpar());
