const mediaParOuImpar = () => {
  let condicao = true;
  let contadorDeNumerosPares = 0
  let contadorDeNumerosImpares = 0
  let somaDosNumerosPares = 0
  let mediaNumerosPares = 0
  let contadorGeral = 0
  let somaGeral = 0
  let mediaGeral = 0

  while (condicao) {
    let leNumero = parseInt(
      prompt("Digite um numero: (obs: Digite 0, para parar a contagem!")
    )
    if (leNumero > 0) {
        `
      ${(somaGeral = somaGeral + leNumero)}
      ${contadorGeral++}
      ${(mediaGeral = somaGeral / contadorGeral)}
      `
      if (leNumero % 2 === 0) {
        `
         ${(somaDosNumerosPares = somaDosNumerosPares + leNumero)}
         ${contadorDeNumerosPares++}
         ${(mediaNumerosPares = somaDosNumerosPares / contadorDeNumerosPares)}
        `
      } else {
        contadorDeNumerosImpares++
      }
    }
    if (leNumero === 0) {
      condicao = false
    }
  }
  return `
Existem ${contadorDeNumerosPares} numeros Pares, nessa funcão
Existem ${contadorDeNumerosImpares} numeros Impares, nessa funcão
A media dos Valores Pares é: ${mediaNumerosPares}!
A media geral é: ${mediaGeral}
`
}

console.log(mediaParOuImpar())
