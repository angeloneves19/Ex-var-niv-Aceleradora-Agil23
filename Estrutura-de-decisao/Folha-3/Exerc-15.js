//15
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
