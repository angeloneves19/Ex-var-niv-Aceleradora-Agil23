//18
//1)Recebeu o ano anoNascimento, e o anoAtual.
//2)Para descobrir a idade, fizemos o ano atual - o ano nascimento, tendo assim a idade da pessoa.
//3)Para descobrir quantos anos, a pessoa teria em 2050, fizemos 2050 - o ano de nascimento.
//4)Por fim, retornamos o resultado, com uma frase, usando o template string.
const idade = (anoNascimento, anoAtual) => {
  const idadePessoa = anoAtual - anoNascimento
  const idade2050 = 2050 - anoNascimento
  return `
    Você tem ${idadePessoa} anos!
    Você terá ${idade2050} anos em 2050!`
};
console.log(idade(2002, 2023));
