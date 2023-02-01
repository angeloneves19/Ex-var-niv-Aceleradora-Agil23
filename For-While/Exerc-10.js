const myfunc = (começo, fim) => {
    let comecoNumInteiro = parseInt(começo)//verificao numeros Inteiros
    let fimInteiro = parseInt(fim)
    if (começo > 0 && fim > 0 ) {//verificacao pra saber se tanto o comeco quanto o fim sao positivos
        for (let i = comecoNumInteiro; i <= fimInteiro; i++) {
            if (i % 2 === 0) {
                console.log(i)
            }
        }    
    }else{
        console.log('Escolha um numero Posivo')
    }
}
myfunc(2, 20.5)//determinie os valores

//
