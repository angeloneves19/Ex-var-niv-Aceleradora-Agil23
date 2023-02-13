
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