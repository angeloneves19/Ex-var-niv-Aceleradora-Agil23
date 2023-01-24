const precoCarro = (precoFabrica, percentualLucroDistribuidor, percentualImposto) => {
  const lucroDistribuidor = precoFabrica * percentualLucroDistribuidor / 100
  const imposto = precoFabrica * percentualImposto / 100
  const precoFinalCarro = lucroDistribuidor + imposto + precoFabrica
    return `
    a)valor correspondente lucro`
}
console.log(precoCarro(40000, 40, 10))