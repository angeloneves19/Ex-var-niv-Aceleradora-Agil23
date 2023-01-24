//20
//1)Recebemos as horas trabalhas, e o salario minimo.
//2)Para descobrir quanto a pessoa ganhava, tivemos que primeiro ver, quanto ela ganhava por hora!
//fizemos o valor minimo dividido por 10, tento assim o resultado desejado.
//3)Tivemos que descobrir, o salario bruto da pessoa, 
//fazendo as horas trabalhadas divido pelo valor da hora trabalhada.
//4)Precisavamos do imposto, dai pegamos o  3 % salario bruto, tendo o resultado do imposto.
//5)Para descobrir o salario final, pegamos o salario bruto e dividimos pelo imposto.
//6)Por fim retornamos tudo, com frases do enunciado, usando Template String.
const cargaHoraria = (horaTrabalhadas, salarioMinimo) =>{
    const valorHoraTrabalhada = salarioMinimo / 10 
    const salarioBruto = horaTrabalhadas * valorHoraTrabalhada
    const imposto = ((salarioBruto * 3) / 100)
    const salarioFinal = salarioBruto - imposto;
 return `
 A)Sua hora trabalhada vale: ${valorHoraTrabalhada}.
 B)Seu salario bruto é: ${salarioBruto.toFixed(2)}.
 C)Seu imposto é 3%, do salario bruto, ficando com: ${imposto.toFixed(2)}.
 D)Seu salario final é: ${salarioFinal.toFixed(2)}.
 `;
}

console.log(cargaHoraria(6, 1302))