//1)
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

//4.
const notaFinal = (nota1, nota2) => {
    let result = nota1 + nota2 / 2
    return result >= 5 ? console.log(`Você foi aprovado(a), com nota: ${result}`) 
    :  console.log(`Você foi reprovado(a), com nota: ${result}`)
}
notaFinal(5, 5)

//2)
//DN dividir |
const dividir = (num1, num2) => {
    let result = num1 / num2 
    if(num2 == 0){
        console.log("Não pode ser feita a divisão, pois não existe divisão por zero")
    }else{
        return console.log(`A resposta é: ${result}`)
    }
}
dividir(20, 2)

//DN dividir ||
const dividir2 = (numerador, denominador) => {
   if(denominador === 0){
        denominador = 3
   }
   let result = numerador / denominador;
   console.log(result);
}
dividir2(15, 3)


//DN reajuste
const reajusteSalarial = (salarioInicial) => {
  if( salarioInicial === 2500 ){
   console.log(`Seu salario com reajuste de 20% é de: ${((salarioInicial * 20) / 100) + salarioInicial}`); 
  } else{
    return console.log(`Seu salario com reajuste de 10% é de:${(salarioInicial * 10) / 100 + salarioInicial}`);
  }
}
reajusteSalarial(3000)


//DN resultado
const calculandoNota = (nota1, nota2, nota3, nota4) => {
let result = ((nota1 + nota2 + nota3 + nota4) / 4);
if( result >= 7){
  console.log(`Você foi aprovado(a), com nota: ${result}`)
}else if( result < 7 && result >= 4 ){
  console.log(`Você ficou em Exame, com nota: ${result}`)
}else{
 console.log(`Você foi reprovado, com nota:  ${result}`);
}
}
calculandoNota(1, 2, 3, 1)


//Folha 3