const nomeMediaDosAlunosImprimidoNaTela = () => {
  condicao = true
  let contadorDeAlunas = 0
  let contadorDeMedia = 0
  let armazenaAlunas = ""

  while (condicao) {
    let nomeDaAluna = prompt(
      "Digite o nome da aluna: obs:Quando quiser parar, digite fim no nome do aluna"
    )
    if (nomeDaAluna == "fim") {
      condicao = false
    } else {
      let mediaDaAluna = parseInt(prompt(`Digite a média da ${nomeDaAluna}!`))
      contadorDeMedia = contadorDeMedia + mediaDaAluna
      contadorDeAlunas++
      armazenaAlunas = armazenaAlunas + nomeDaAluna + ", "
    }
  }
  console.log(armazenaAlunas)
  return document.write(
    `Nome das alunas: ${armazenaAlunas} média total delas ${
      contadorDeMedia / contadorDeAlunas
    }!`
  )
}
console.log(nomeMediaDosAlunosImprimidoNaTela())