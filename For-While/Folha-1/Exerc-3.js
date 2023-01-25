//3
//1)Recebemos um valor pro M e N, numa função.
//2)Dai perguntamos, se o M era menor que o N, dai imprimos na tela os valores.
//3)Se não, retornamos no console.log "Escolha um numero menor pro M!".
const numeroDeUmADez = (m, n) => {
  if (m < n)
    for (let i = m; i <= n; i++) {
      console.log(i)
    }else {
    console.log(`Escolha um numero menor pro M!`)
  }
}
numeroDeUmADez(100, 10)