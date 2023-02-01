const somaDePares = (começo, fim) => {
    let comecoNumInteiro = parseInt(começo)//verificao numeros Inteiros
    let fimInteiro = parseInt(fim)
    let soma = 0
    if (começo > 0 && fim > 0 ) {//verificacao pra saber se tanto o comeco quanto o fim sao positivos
        for (let i = comecoNumInteiro; i <= fimInteiro; i++) {
            if (i % 2 === 0) {
                soma = soma + i
                console.log(i)
            }
        }    
    }else{
        console.log('Escolha um numero Posivo')
    }
    console.logç(soma)
}

somaDePares(2, 20)//determinie os valores

//
