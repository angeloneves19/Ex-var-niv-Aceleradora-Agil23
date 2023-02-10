//19
//Criamos um variavel global, para imprimir tudo no console.log.
//Depois criamos um estrutura do For, para fazer a repetição, de um a dez, pois é uma tabuada!
//Em seguida, criamos uma variavel chamada de multiplicação, para fazer a multiplicação dos numeros!
//Por fim, estilizamos eles no console.log, utilizando templete String!
//completo
const imprimirTabuada = (numeroInicial, numeroDaTabuada) => {
  for (let i = numeroInicial; i <= 10; i++) {
    let multiplicacao = i * numeroDaTabuada
    console.log(`
        ${i} x ${numeroDaTabuada} = ${multiplicacao} 
        `)
  }
}

imprimirTabuada(1, 5)