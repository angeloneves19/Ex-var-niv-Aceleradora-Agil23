//Criamos uma variavel global, para ler tudo!
//Depois criamos um let condição verdadeira para inicar o loop while!
//Em seguida criamos um let guardarRaizInteira para armazenar os resultados dos numeros quadrados perfeitos!
//Depois iniciamos o while utilizando um prompt para saber os numeros desejados pelos usuarios.
//Dai fizemos uma verificação para fazer a parada do loop while, quando o numero fosse zero iria parar!
//Se nao, fizemos uma verificaco da raiz, e tornamos numeros interiros para termos quadrados exatos!
//E por fim passamos um contador, para saber quantos quadrados exatos, haviam sidos capturados pela variavel guardar Numero!
const mostrarRaizesQuadradasInteiras = () => {
    let condicao = true
    let contador = 0
  while (condicao) {
    let guardaNumero = Number(prompt("Digite um numero (obs: 0 para a contagem)"))
    if (guardaNumero === 0) {
      condicao = false
    }else{ 
      let root = Math.sqrt(guardaNumero)
      if (root === parseInt(root)) {
         contador++
      }
    }
  }
  console.log(`Existem ${contador} numeros interos digitados`)
}
mostrarRaizesQuadradasInteiras()