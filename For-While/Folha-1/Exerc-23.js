//23
// criamos a funcao e passamos o contador para sabermos o resultado .
// criamos o contador que vai do 1 ate o numero escolhido para termos todos on numeros impares .
// obs: para sabermos a resposta da raiz quadrada.
// criamos a verificacao para termos somentes os numeros impares .
// diminuimos os impares do numero passado por parametro ate chegar a um numero igual ou menor que zero.
// usamos o contador para pegar a repeticao e passamos por console no final da funcao .

let contadorSubtracoes = 0
const tirandoARaiz = (num) => {
  for (let i = 1; i <= num; i++) {
    if(i % 2 !== 0){
     num = num - i
      contadorSubtracoes++
    }
  }
console.log(`A raiz quadrada é ${contadorSubtracoes}`)
}
tirandoARaiz(25)