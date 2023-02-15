// 24
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