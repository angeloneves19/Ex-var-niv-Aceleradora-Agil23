let repeticao = prompt("Quantas vezes você quer que repita!")
let numeroMaior = 0
let numeroMenor = 0
for (let i = 0; i < repeticao;i++) {
  let leNumber = parseInt(prompt("Escreva um numero"))
  if( leNumber > numeroMaior  ) {  
   numeroMaior = leNumber
     console.log(`Numero maior é: ${numeroMaior}`) 
  }else{
    numeroMenor = leNumber
   console.log(`O menor é o: ${numeroMenor}`);
  }
}