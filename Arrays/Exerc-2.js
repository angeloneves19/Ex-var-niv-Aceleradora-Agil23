// 2. Crie um algoritmo que leia um vetor de 30 números
//inteiros e gere um segundo vetor cujas posições pares são o
//dobro do vetor original e as ímpares o triplo.

//-Criamos dois arrys vazios globais para armazenar valores dos
//contadores i e as verificações abaixo
//-Criamos uma Funcao Para armazenar a nossa logica e passamos o 
//numero de parada do contador por parametros.
//-Criamos o contador para Colocarmos no arry
//- Fizemos uma verificao if para termos os numeros pares e multiplicar por dois(dobro),
//fazendo o mesmo com os impares porem usando o triplo(x3) e adicionando-os no Arry2
//passamos o valor da  parrada e o resultado por console.log
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
