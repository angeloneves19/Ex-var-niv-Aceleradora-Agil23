const somaDePares = (inicio, fim) => {
    let inicioNumeroInteiro = parseInt(inicio)//verificao numeros Inteiros
    let fimNumeroInteiro = parseInt(fim)
    let soma = 0
    if (começo > 0 && fim > 0 ) {//verificacao pra saber se tanto o comeco quanto o fim sao positivos
        for (let i = inicioNumeroInteiro; i <= fimNumeroInteiro; i++) {
            if (i % 2 === 0) {
                soma = soma + i
                console.log(`Numeros pares, entre eles: ${i}`)
            }
        }    
    }else{
        console.log('Escolha um numero Posivo')
    }
    console.log(`Resultado dos numeros, somados: ${soma}`)
}

somaDePares(2, 20)//determinie os valores

//
