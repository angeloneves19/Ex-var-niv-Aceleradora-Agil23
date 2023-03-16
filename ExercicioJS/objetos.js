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

let pokemonn =
  "pikachu, 3, eletric, (thunderShock - QUICK attack - thuNder), STATIC, (VERIDIAN, CERULEAN, PALLET)"
let transforme = pokemonn.split(",")
// console.log(transforme
const pikachu = transforme[0].replace("p", "P")
const atacks = transforme[3].split("-")
const place = transforme[5].split(",")

const pkm = []
const objeto = () => {
  pkm.push({
    nome: pikachu,
    level: transforme[1],
    type: transforme[2],
    ability: transforme[4],
    atacks1: transforme[3].split("-")[0],
    atacks2: transforme[3].split("-")[1],
    atacks3: transforme[3].split("-")[2],
    place1: transforme[5],
  });
console.log(`

Name: ${pkm[0].nome}
Lv: ${pkm[0].level}  - Type: ${pkm[0].type.toUpperCase()}
Ability: ${pkm[0].ability.toLowerCase()}
Attacks:
    - ${pkm[0].atacks1.split("1").replace("t", "T").split("(")},
    - ${pkm[0].atacks2}
    - ${pkm[0].atacks3}

Places:
    - veridian
    - pallet
    - cerulean
    `);
}
objeto()

//
//
//
//
//
