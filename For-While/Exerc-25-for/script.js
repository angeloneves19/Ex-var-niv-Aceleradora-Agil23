const empresa = () => { 
  let condicao = true;
  let armazenaSalario = 0;
  let contadorMasculino = 0;
  let contadorFeminino = 0;
  while (condicao) {
    let codigo = parseFloat(prompt("Digite seu codigo da empresa: "));
    if (codigo === -11) {
      condicao = false;
    } else {
      let sexo = prompt(
        "Digite seu sexo: obs: Se for masculino digite masc, se for feminino digite femi"
      );
      let horasTrabalhadas = parseFloat(
        prompt("Digite suas horas trabalhadas na empresa: ")
      );
      let salarioEmHoras = horasTrabalhadas * 26.9;
      let salarioLiquido = salarioEmHoras * 30;

      if (sexo === "masculino") {
        let descontoMasculino = (salarioLiquido * 10) / 100;
        let salarioBrutoMasculino = salarioLiquido - descontoMasculino;
        contadorMasculino++;
          console.log(` 
        salario liquido: ${salarioLiquido}
        horasTrabalhadas:${horasTrabalhadas}
        salarioBruto:${salarioBrutoMasculino}
        contador masculino ${contadorMasculino}
        `);
        console.log()
      }

      if (sexo === "feminino") {
        let descontoFeminino = (salarioLiquido * 6) / 100;
        let salarioBrutoFeminino = salarioLiquido - descontoFeminino;
        contadorFeminino++;
        console.log(`
        Codigo:${codigo}
        Sexo:${sexo}
        horasTrabalhadas:${horasTrabalhadas}
        salarioBruto:${salarioBrutoFeminino}
        Eistem ${contadorFeminino} funcionarias feminino
        `);
      }
    }
  }
};
console.log(empresa());

// 8 * 26,90
//215,2
//215,2 * 30
//215,2
//((6.456 * 10) / 100)]

//receber 5810,4 masc
//receber 6068,64 femi
