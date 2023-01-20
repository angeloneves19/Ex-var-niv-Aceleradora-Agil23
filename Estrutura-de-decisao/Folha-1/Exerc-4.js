//4
const notaFinal = (nota1, nota2) => {
  let result = nota1 + nota2 / 2
  return result >= 5 ? console.log(`Você foi aprovado(a), com nota: ${result}`) 
  :  console.log(`Você foi reprovado(a), com nota: ${result}`)
}
notaFinal(5, 5)