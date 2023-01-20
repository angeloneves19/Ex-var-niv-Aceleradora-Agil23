// //8
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
  