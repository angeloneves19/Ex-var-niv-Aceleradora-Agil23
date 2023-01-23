//12
//1-Elevamos as medidas dos catetos ao quadrado;
//2-Somamos os resultados;
//3-Extraímos a raiz quadrada.
// Utilizamos o Math.sqrt() por ter uma raiz exata.
// mais tentamos utilizar o metodo convencional, fazendo: * 0,5 ,sem obter êxito!
const calculeAHipotenusa = (b, c) => {
  let bAoQuarado = b * b
  let cAoQuarado = c * c
  let a = bAoQuarado + cAoQuarado
  let result = Math.sqrt(a)
  return `O valor da hipotenusa é: ${result}`
};
console.log(calculeAHipotenusa(12, 3))
