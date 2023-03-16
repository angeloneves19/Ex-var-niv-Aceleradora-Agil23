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
let pokemonn = "pikachu, 3, eletric, (thunderShock - QUICK attack - thuNder), STATIC, (VERIDIAN, CERULEAN, PALLET)"
let transforme = pokemonn.split(",")
// console.log(transforme  
const pkm = [] 
const objeto = () => {
    pkm.push({
        nome: transforme[0],
        lv: transforme[1], 
        type:transforme[2],
        ability: transforme[4],
        atacks: transforme[3],
        place: transforme[6]
    })
}
objeto()
console.log(pkm)

//
// 
// 
// 
// 