// 2. Crie um algoritmo que leia um vetor de 30 números
//inteiros e gere um segundo vetor cujas posições pares são o
//dobro do vetor original e as ímpares o triplo.
const arry = []
const arry2 = []
const parOuImpar = (numero) => {
  for (i = 1; i <= numero; i++) {
    arry.push(i)
    if (i % 2 === 0) {
      arry2.push(i * 2)
    } else {
      arry2.push(i * 3)
    }
  }
}
parOuImpar(30)
console.log(arry)
console.log(arry2)
