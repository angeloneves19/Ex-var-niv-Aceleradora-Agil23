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

let pokemon = "pikachu, 3, eletric, (thunderShock - QUICK attack - thuNder), STATIC, (VERIDIAN, CERULEAN, PALLET)"
let remocao = pokemon.split(",")
let remocaoAtacks =  remocao[3].split("-")

const transforma = (array) => {
  return  array.charAt(0).toUpperCase() + array.slice(1).toLowerCase()
  
}


const pkm = []
const objeto = () => {
  pkm.push({
    nome: transforma(remocao[0]),
    level: remocao[1],
    type:   remocao[2],
    ability: remocao[4],
    atacks1: remocaoAtacks[0].slice(2, 14),
    atacks2: remocaoAtacks[1],
    atacks3: remocaoAtacks[2].slice(1, 8),
    place1: remocao[5],
  });
console.log(`

Name: ${pkm[0].nome}
Lv: ${pkm[0].level}  - Type: ${pkm[0].type.toUpperCase()}
Ability: ${pkm[0].ability.toLowerCase()}
Attacks:
    - ${transforma(pkm[0].atacks1).trim()},
    - ${transforma(pkm[0].atacks2).trim()}
    - ${transforma(pkm[0].atacks3)}

Places:
    - ${transforma(pkm[0].place1)}
    - pallet
    - cerulean
    `);
}
objeto()
