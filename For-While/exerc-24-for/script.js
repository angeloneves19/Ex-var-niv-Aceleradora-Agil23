// 24
//Primeiro criamos uma função global, para imprimir tudo!
//Depois criamos um contador para armazenar a resposta final!
//Dai criamos uma estrutura de For, com o numero de parada igual a 5, 
//pois no enunciado so poderia haver 5 numeros digitados pelos usuarios!
//Dai criamos uma verificação para passar somente numeros abaixo de zero(somente numeros negativos).
//E por fim chamamos o contador para nos dizer somente os numeros negativos que foram digitados!
//Dai so passamos uma mensagem no cosole.log chamando o contador com as respostas!
const contarNumerosNegativos = () => { 
    contador = 0
   for(i = 0; i < 5; i++){
    let leCincoNumeros = Number(prompt('Digite cinco numeros'))
    if(leCincoNumeros < 0){
        contador++
    }
   }  
   console.log(`Exitem ${contador} valores negativos !!!`) 
}
contarNumerosNegativos()