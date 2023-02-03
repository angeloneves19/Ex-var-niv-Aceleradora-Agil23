let condicao = true
let contagemNumeros = 0
while (condicao) {
  let leNumero = prompt("Escolha um numero! (obrs: -1 para a contagem, dos numeros) ")
  if (leNumero > contagemNumeros) {
    contagemNumeros++
  }
  if (leNumero == -1) {
    condicao = false
  }
  if (leNumero > 0) {
  }
}
window.alert(`Numeros totais: ${contagemNumeros}`)
