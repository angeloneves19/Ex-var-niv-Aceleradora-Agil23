let condicao = true;
let primeiroNumeroMaior = 0; 
let segundoNumeroMaior = 0;
let terceiroNumeroMaior = 0;

while (condicao) {
  let leNumber = parseInt(
    prompt("Digite um numero:(numero 7 encerra a contagem)")
  );
  if (leNumber > primeiroNumeroMaior) {
    terceiroNumeroMaior = segundoNumeroMaior;
    segundoNumeroMaior = primeiroNumeroMaior;
    primeiroNumeroMaior = leNumber;
  } else if (leNumber > segundoNumeroMaior) {
    terceiroNumeroMaior = segundoNumeroMaior;
    segundoNumeroMaior = leNumber;
  } else if (leNumber > terceiroNumeroMaior) {
    terceiroNumeroMaior = leNumber;
  }
  if (leNumber == 7) {
    condicao = false;
  }
}
console.log(`Numero maior é: ${primeiroNumeroMaior}`);
console.log(`Segundo Numero maior é: ${segundoNumeroMaior}`);
console.log(`Terceiro numero maior: ${terceiroNumeroMaior}`);

//39 10 3915 55 7

/*

const repeticao = prompt("Quantos numeros gostaria de Colocar?");
let num1 = 0;
let num2 = 0;
let num3 = 0;
//let numeroMenor = 0;
for (let i = 0; i < repeticao; i++) {
  let leNumber = prompt("Digite um numero :");
  if (leNumber > num1) {
    leNumber = num1;
    console.log(`Numero maior é: ${num1}`);
  } else if (num1 > leNumber) {
    num1 = num2;
    console.log(`Numero maior é: ${num2}`);
  } else if (leNumber > num3) {
    num2 = num3;
    console.log(`Numero maior é: ${num3}`);
  } else {
    console.log(`Menor numero  é: ${leNumber}`);
  }
}































/*
let repetition = prompt("Digite um numero de repeticao!");

let armazena1 = 0;
let armazena2 = 0;
let armazena3 = 0;

for (let i = 0; i < repetition; i++) {
  let readNumber = prompt("Digite um numero!");
  if (readNumber > armazena1) {
    armazena2 = armazena3;
    armazena3 = armazena1;
    armazena1 = readNumber;
    console.log(`Numero Maior é: ${armazena1}`);
    console.log(`Numero Maior é: ${armazena2}`);
    console.log(`Numero Maior é: ${armazena3}`);
  } else {
    console.log(`Numero Maior é: ${readNumber}`);
  }
}





let num1 = 0
let num2 = 0
let num3 = 0
const number = (num) => {
    if (num > num1) {
        num2 = num3
        num3 = num1
        num1 = num
        console.log(num1, num2, num3)
    }
} 

const myvar = (numero) => {
  let cont = 0;
  while (numero > cont) {
    cont++;
    console.log(cont);
  }
};
myvar(10)
*/
