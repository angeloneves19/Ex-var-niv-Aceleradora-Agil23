//9
const repeticao = prompt("Quantos numeros gostaria de Colocar?");
let numeroMaior = 0;
//let numeroMenor = 0;
for (let i = 0; i < repeticao; i++) {
  let valores = prompt("Digite um numero :");
  //let resultadoArr = math.max(valores.split(""));
  if (valores > numeroMaior) {
    numeroMaior = valores;
    console.log(`Numero maior é: ${numeroMaior}`)
  }else if(valores > numeroMaior) {
    numeroMaior = valores;
    console.log(`Numero maior é: ${numeroMaior}`);
  }else if(valores > numeroMaior){
    numeroMaior = valores;
    console.log(`Numero maior é: ${numeroMaior}`);
  }
    
}
/*
const myvar = (numero) => {
  let cont = 0;
  while (numero > cont) {
    cont++;
    console.log(cont);
  }
};
myvar(10)
*/
