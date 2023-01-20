//3
const idadeAtual = (anoAtual, dataNasc) => {
  let result = anoAtual - dataNasc;

  if (anoAtual - dataNasc >= 18) {
    console.log(`Você é maior de idade, sua idade é: ${result}`);
  }else{
    return console.log(`Você é menor de idade, sua idade é: ${result}`);
  }
};
idadeAtual(2023, 2002)