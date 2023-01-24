//19 
//1)Criamos a function e passamos os percentuais por parametros.
//2)criamos as constantes e passamos os valores das porcentagens e o Preço final.
//3)retornamos por template string e um console.log chamando a funcão e passando os valores

const precoCarro = (
  precoFabrica,
  percentualLucroDistribuidor,
  percentualImposto
) => {
  const lucroDistribuidor = (precoFabrica * percentualLucroDistribuidor) / 100
  const imposto = (precoFabrica * percentualImposto) / 100
  const precoFinalCarro = lucroDistribuidor + imposto + precoFabrica
  return `
    a)valor correspondente lucro ${lucroDistribuidor}
    b)O valor correspondente aos impostos ${imposto}
    c)O preco final do veículo ${precoFinalCarro}`
};
console.log(precoCarro(40000, 40, 10))
