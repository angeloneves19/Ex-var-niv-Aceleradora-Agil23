//1.
const soma = (num1 , num2 , num3) => {
  return num1 + num2 + num3
}

console.log(soma(12, 1, 4))

//2.
const divisao = (num1, num2) => {
    return num1 / num2
}

console.log(divisao(17, 2))
 //3.
const idadeAtual = (anoAtual, dataNasc) => {
  let result = anoAtual - dataNasc;

  if (anoAtual - dataNasc >= 18) {
    console.log(`Você é maior de idade, sua idade é: ${result}`);
  }else{
    return console.log(`Você é menor de idade, sua idade é: ${result}`);
  }
};

idadeAtual(2023, 2002)

//4
const notaFinal = (nota1, nota2) => {
    let result = nota1 + nota2 / 2
    return result >= 5 ? console.log(`Você foi aprovado(a), com nota: ${result}`) 
    :  console.log(`Você foi reprovado(a), com nota: ${result}`)
}
notaFinal(5, 5)

//5