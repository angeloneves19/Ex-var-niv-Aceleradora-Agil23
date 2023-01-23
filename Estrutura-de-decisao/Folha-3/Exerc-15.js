//15
//criamos um funcao e passamos o numero por parametro
//2)fizemos uma verificao pra ver se  o numero 
//é positivo ou negativo
//3)fizemos as operacoes dentro das variaveis
//4)chamamos todas no return usando Template String 
//chamando cada variavel

const valoresNumPositivo = (num) => {
  if(num > 0){
    const aoQuadrado = num * num
    const aoCubo = num * num * num
    const raizQuadrada = Math.sqrt(num)
    const raizCubica = Math.cbrt(num)

    return `o numero solicitado foi :${num},
     a)Numero digitado ao Quadrado:${aoQuadrado}, 
     b)o numero digitado ao cubo: ${aoCubo}
     c)Raiz quadrada: ${raizQuadrada} 
     d)Raiz Cúbica: ${raizCubica}`
  }else{
    return 'Escolha um numero positivo'
  }
}
console.log(valoresNumPositivo(9))
