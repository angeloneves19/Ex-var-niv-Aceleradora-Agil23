//8
const maiorOuMenor = (num1, num2) =>{
  let contador = 0 
for( let i = num1; i < num2; i++){
  contador++
 }
 if (num1 > num2) {
   console.log(`Numero inicial é Maior`);
 } else {
   console.log(`Valor do menor  é:${num1} e o valor do maior é: ${num2}`);
 }
console.log(`Tem ${contador} numeros`);
}
maiorOuMenor(0, 10)