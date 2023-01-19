//1

const subtracao = (num1, num2) => {
  return num1 + num2;
};
//console.log(subtracao(6, 6))

//2
const multiplicacaoDeTres = (numA, numB, numC) => {
  let multiplicacao = numA * numB * numC;
  return multiplicacao;
};
//console.log(multiplicacaoDeTres(2, 2, 2));

//3
const somaQuatro = ( num1, num2, num3, num4 ) =>{
let soma = num1 + num2 + num3 + num4;
return soma
}
//console.log(somaQuatro(5, 5, 5, 5));

//4
const mediaAritmetica = ( num1, num2, num3, num4 ) =>{
    let somaAritmetica = num1 + num2 + num3 + num4 / 4;
    return somaAritmetica;
}
//5
console.log(somaQuatro(6, 6, 6, 6));
const KiloEmGrama = ( kilo ) =>{
let grama = 1000
return //console.log(`Você está, com ${kilo * grama} gramas!`)
}
//KiloEmGrama(50)

 //6
const loja = (valorEtiqueta, parcelas) =>{
    let Avista = valorEtiqueta - ((valorEtiqueta * 10) / 100);
    let duasParcelas = valorEtiqueta 
    let quatroParcelas = valorEtiqueta + ((valorEtiqueta * 5) / 100)
    if(parcelas === 0 || parcelas === 1 ){
        console.log(`${Avista}`)
    }
    if(parcelas === 2){
        console.log(`${duasParcelas}`)
    }
    if(parcelas === 4){
        console.log(`${quatroParcelas}`)
    }else{
        return console.log(`Não temos como parcerlar este valor !!!`) 
    }
   
    }
loja(100, 5)