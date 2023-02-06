const numerosParesEImpares = () => {
  let condicao = true
  let contadorDePar = 0
  let contadorDeImpar = 0
  while (condicao) {
    let leNumber = parseInt(
      prompt(`Digite um numero: (obs:Para parar a  contagem, digite -1!)`)
    );
    if (leNumber > 0) {
      if (leNumber % 2 === 0) {
        contadorDePar++
      } else {
        contadorDeImpar++
      }
    }
    if (leNumber == -1) {
      condicao = false
    }
  }
  return `
       São ${contadorDePar} par
       São ${contadorDeImpar} Impar
  `
}
console.log(numerosParesEImpares())
