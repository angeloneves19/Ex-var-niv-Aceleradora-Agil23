let condicao = true
let contagemNumeros = 0
while (condicao) {
  let leNumero = prompt("Escolha um numero! (obrs: -1 para a contagem, dos numeros) ")
  if (leNumero == -1) {
    condicao = false
  }
  if (leNumero > 0) {
    contagemNumeros++
  }
}
window.alert(`Numeros totais: ${contagemNumeros}`)

