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