//7
const reajusteSalarial = (salarioInicial) => {
  if( salarioInicial === 2500 ){
   console.log(`Seu salario com reajuste de 20% é de: ${((salarioInicial * 20) / 100) + salarioInicial}`); 
  } else{
    return console.log(`Seu salario com reajuste de 10% é de:${(salarioInicial * 10) / 100 + salarioInicial}`);
  }
}
reajusteSalarial(3000)
