/*#1 Temperatura em Kelvin

Nas profundezas de seu laboratório de meteorologia em uma montanha, o cientista louco Kelvin estuda sobre a previsão do tempo.

Recentemente, Kelvin começou a publicar suas previsões do tempo em seu site. No entanto, há um problema: 
todas as suas previsões estão no formato de temperatura Kelvin.

Com nosso conhecimento de JavaScript, vamos converter Kelvin para Celsius e depois para Fahrenheit.

Exemplo:
283 K se converte em 10 °C, que se converte em 50 °F
[14:57]
Checklist desse exercício

[ok] - A previsão hoje é de 293 Kelvin. Para começar, crie uma variável chamada kelvin e defina-a como 293. O valor salvo em kelvin permanecerá constante. Escolha o tipo de variável com isso em mente.
[ok] - Escreva um comentário acima que explique esta linha de código
[ok] - Celsius é semelhante a Kelvin - a única diferença é que Celsius é 273 graus menos que Kelvin.
 Vamos converter Kelvin para Celsius subtraindo 273 da variável kelvin.
  Armazene o resultado em outra variável, chamada celsius.
[ok] - Use essa equação para calcular Fahrenheit, depois guarde o resultado em uma variável chamada fahrenheit.
 Fahrenheit = Celsius * (9/5) + 32

Na próxima etapa, arredondaremos o número salvo para fahrenheit. Escolha o tipo de variável que permite alterar seu valor.
[ok] - Quando você converte de Celsius para Fahrenheit, geralmente obtém um número decimal.
 Use o método Math.floor(number) para arredondar para baixo a temperatura Fahrenheit.
  Salve o resultado na variável fahrenheit.
[ok] - Use console.log para registrar a temperatura em fahrenheit no console da seguinte forma:
VALOR-DA-TEMPERATURA graus em Fahrenheit.*/

const kelvin = 293;
//constante está guardando o resultado de kelvin.
let c = 273;
let contCelsius = kelvin - c;
let celsius = contCelsius;
let fahrenheit = celsius * (9/5) + 32;
let fahrenheitt = 68;
let fahrenheitNumeroInteiro = Math.floor(fahrenheitt) 
//console.log(`A temperatura é ${fahrenheitNumeroInteiro} graus em Fahrenheit`)


 /*
#2 

Idade de um cachorro

Os cães amadurecem a um ritmo mais rápido do que os seres humanos.
Costumamos dizer que a idade de um cachorro pode ser calculada em “anos de cachorro” para explicar seu crescimento em comparação com um humano da mesma idade. De certa forma, 
poderíamos dizer que o tempo passa rapidamente para os cães – 8 anos na vida de um ser humano equivale a 45 anos na vida de um cão. Quantos anos você teria se fosse um cachorro?

de “anos humanos” para “anos de cachorro”:

Os primeiros dois anos de vida de um cão contam como 10,5 anos cada.
Cada ano seguinte equivale a 4 anos de cão.
Antes de começar a fazer as contas de cabeça, deixe um computador cuidar disso! 

Com seu conhecimento de operadores matemáticos e variáveis,
 use JavaScript para converter sua idade humana em anos de cachorro.
*/

let idadeHumana = 20;
let doisPrimeirosAnos = 10.5 * 2;
let restante =  18 * 4;
const total = doisPrimeirosAnos + restante;
//console.log(`Idade do pablo convertida em anos de cachorro: ${total}`)




//#3
let nome = "ana"
nome = "abacaxi"

function myFunc() {
  nome = "pablo" 
  return nome
}
//console.log(myFunc())


//#4
    const animal = "gatoto"
    //console.log(animal)
    //console.log(animal.replaceAll("to", "do"))

//#5

/*
Nesse módulo as alunas devem entender os seguintes assuntos:

ok VAR, LET 2
ok toUpperCase
ok toLowerCase
ok replace
ok replaceAll
ok trim
ok split
ok slice

*/

/* 
    Transforme a string pokemon no seguinte texto:
Name: Pikachu
    Lv: 3 - Type: ELETRIC
    Ability: static
    Attacks:
        - Thundershock,
        - Quick attack
        - Thunder

    Places:
        - veridian
        - pallet
        - cerulean
    
*/

const pokemon = "pikachu, 3, eletric, (thunderShock - QUICK attack - thuNder), STATIC, (VERIDIAN, CERULEAN, PALLET)"

const pkm = pokemon.split(",")
const namePokemon = pkm[0]
const name = namePokemon[0].toUpperCase() + namePokemon.slice(1)
const level = pkm[1]
const type = pkm[2].toUpperCase().trimStart()
const ability = pkm[4].toLowerCase()
//Attacks
const attack = pkm[3].split("-")
const attackName = attack[0].slice(2).toLowerCase().replace('t', 'T')
const attack2 = attack[1].trimStart().toLowerCase().replace('q', 'Q')
const attack3 = attack[2].slice(0, 8).trimStart().toLowerCase().replace('t', 'T')
//Places
const places = pkm[5].slice(2).toLowerCase()
const places2 = pkm[7].slice(0, 7).toLowerCase()
const places3 = pkm[6].toLowerCase()

const pokeDex = () => {
    return `
    Name: ${name},
    Lv: ${level}, Type: ${type}
    Ability: ${ability}
    Attacks:
        - ${attackName},
        - ${attack2}
        - ${attack3}

    Places:
        - ${places}
        - ${places2}
        - ${places3}
    `;
}

console.log(pokeDex());