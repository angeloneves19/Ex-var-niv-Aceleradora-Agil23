const mostrarRaizesQuadradasInteiras = () => {
    let condicao = true
    let guardarRaizInteira = 0
  while (condicao) {
    let guardaNumero = parseInt(prompt("Digite um numero (obs: 0 para a contagem)"))
    if (guardaNumero === 0) {
      condicao = false
    }else{ 
        console.log(Math.sqrt(guardaNumero))
    }
  }
};
mostrarRaizesQuadradasInteiras()
