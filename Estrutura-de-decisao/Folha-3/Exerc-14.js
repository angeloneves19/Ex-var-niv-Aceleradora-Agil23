//14
const calculandoAreaDoCubo = (pi, raiz) => {
  let raizDaConta = raiz * 0.5
  let raizAoQuadrado = raizDaConta * raizDaConta
  let area = pi + raizAoQuadrado
  return area
}
console.log(calculandoAreaDoCubo(3.14, 4))