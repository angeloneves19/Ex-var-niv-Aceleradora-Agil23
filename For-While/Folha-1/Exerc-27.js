//Primeiro criamos um contador, para armazenar o resultado final!
//Depois criamos uma variavel global chamada de diferencaDeIdade, que armazenando o nome Chico
//com valor de 50cm que é a diferença deles!
//E nome Ze que armazenava o numero 10, que era a diferença!
//Da criamos uma estrutura For que iria parar quando ze fosse maior que Chico!
let contadorDeAnos = 0
const diferencaDeIdade = (chico, ze) => {
    for(let i = ze ; i <= chico; i++){
        contadorDeAnos++
    }
    console.log(`Em ${contadorDeAnos} anos, Zé alcançara altura do Chico!`)
}
diferencaDeIdade(50 , 10)