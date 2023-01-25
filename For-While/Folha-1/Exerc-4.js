//4
/*
- Criamos a função  
- Recebemos um valor, pro M e pro N.
- Dai dizemos que i era igual M rebendo o valor dele.
- Dai perguntamos se  i é menor que N, e acresentamos + 1 até chegar no valor de N.
- Dai perguntamos se o I divisivel por 2, e vemos se o resultado vai ser diferente de zero, para imprimir somente impar.
-Se não, retornamos um mensagem no console.log, "Somente somamos numeros impares"
*/
const impares = (m, n) => {
  for (let i = m ; i < n ; i++) {
    if (i % 2 ==! 0) {
      console.log(i)
    } else {
      console.log(`Somente somamos numeros impares`)
    }
  }
}
impares(1, 35)