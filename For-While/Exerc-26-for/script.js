const pesquisaEntreHabitantes = () => {
  let Condicao = true
  let armazena = 0
  let contador = 0
  let contadorPaes = 0
  let maiorSalario = 0
  let contadorDePessoasComSalarioDeCem = 0
  while (Condicao) {
    let trabalhadoresNaCasa = Number(
      prompt("Quantas Pessoas trabalham na sua casa?")
    );
    for (i = 1; i <= trabalhadoresNaCasa; i++) {
      let renda = Number(prompt(`Qual a renda da Pessoa ${i} ?`))
      armazena += renda
      contador++
      if (renda > maiorSalario) {
        maiorSalario = renda
      }
      if (renda <= 100) {
        contadorDePessoasComSalarioDeCem++
        
        console.log(
          "percentual  de pessoas com salario cem = " +
           contador * (contadorDePessoasComSalarioDeCem / 100)

        )
      }
    }
    console.log("media de salarios " + (armazena / contador).toFixed(1))
    console.log("maior salario " + maiorSalario)

    if (trabalhadoresNaCasa === 0) {
      Condicao = false
    } else {
      let quantidadesPaes = confirm("voce tem Filhos ? (sim ou não)")
      if (quantidadesPaes) {
        contadorPaes++
        console.log(contadorPaes)
        let quantidadeFilhos = parseInt(prompt("Quantos filhos você tem ?"))
      } else {
        console.log("")
      }
    //   console.log(quantidadeFilhos)
    }
  }
};
pesquisaEntreHabitantes()

// angelo
// 2
// pessoa 2
// 4
// pessoa 3
//1

// 2 + 4 + 1 / 3

// console.log(armazena / contador)
