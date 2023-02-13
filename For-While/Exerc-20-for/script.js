const mostrarRaizesQuadradasInteiras = () => {
    let condicao = true
    let guardarRaizInteira = 0
  while (condicao) {
    let guardaNumero = Number(prompt("Digite um numero (obs: 0 para a contagem)"))
    if (guardaNumero === 0) {
      condicao = false
    }else{ 
      let root = Math.sqrt(guardaNumero)
      if (root == parseInt(root)) {
         guardarRaizInteira = root + ' quadrado perfeito'
         console.log(guardarRaizInteira)
      }
    }
  }
}
mostrarRaizesQuadradasInteiras()