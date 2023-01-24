//17
// 1 pe == 12 polegadas
// 1 jarda == 3 pes 
// 1 milha == 1760 jardas

//1)passamos o valor de pes por Parametro
//2)passamos as logicas das conversoes por const
//3)chamamos no return por template String
const medidasEmPes = (pes) => {
    const polegadas = pes * 12 
    const jardas = pes / 3
    const milha = jardas / 1760 
    return `
    valor em pes: ${pes}
    a)valor em polegadas: ${polegadas}
    b)valor em jardas: ${jardas}
    c)valor em milhas: ${milha.toFixed(8)}`
}
console.log(medidasEmPes(12))

