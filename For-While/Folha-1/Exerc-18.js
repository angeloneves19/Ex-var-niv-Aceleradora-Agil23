//18
// criammos  a funcao passando  os dados  por parametros
const polegadasPorCentimetros = (polegadas, centimetros) => {
    // criamos a repeticao de 20 para a tabela 
    for(i = polegadas; i <= 20; i++){
        // e criamos a conversao passando no console e estruturando com Template String.
        let conversao = centimetros * i
        console.log(`${i} pol = ${conversao} cm`)

} 
}
// passamos os dados e chamamos a funcao
polegadasPorCentimetros(1, 2.54)


// 1 p = 2.54
// 2 p = 5.8