// const ab = (b) => {
//   const primeiraPosicao = b[0].toUpperCase() + b.slice(1)
//   return primeiraPosicao 
// }
// console.log(ab('angelo'))
// console.log(ab('pablo'))
// console.log(ab('julio'))

// //difenrenca entre slice e substring
// var testing = 'ola povo'
// console.log(testing.slice(3))
// console.log(testing.substring(3,7))

// //splice
// const meses = ['Jane', 'marc', 'Abril', 'maio'];
// meses.splice(1 , 0, 'Feve')
// console.log(meses)








// console.log(`

// Name: ${pkm[0].nome}
// Lv: ${pkm[0].level}  - Type: ${pkm[0].type.toUpperCase()}
// Ability: ${pkm[0].ability.toLowerCase()}
// Attacks:
//     - ${pkm[0].atacks1},
//     - ${pkm[0].atacks2}
//     - ${pkm[0].atacks3}

// Places:
//     - ${pkm[0]}
//     - pallet
//     - cerulean
//     `);

    const transforma = (array) => {
      return  array.charAt(0).toUpperCase() + array.slice(1).toLowerCase()
      
    }
    console.log(transforma('Quick attack'))

    const placeMinusculas = (valor) => {
      return valor.toLowerCase()
    }
    console.log(placeMinusculas('VERIDIAN'))









/*
function bubbleSort() {
  const arrayNumbers = [0, 20, 17, 19, 33, 11, 12, 18, 10, 7, 8, 3, 2, 1, 14, 16, 15, 9]
  let isChange
  do {
    isChange = false

    for (let i = 0; i < arrayNumbers.length; i++) {
      if (arrayNumbers[i] > arrayNumbers[i + 1]) {
        let temp = arrayNumbers[i] // Guardamos o valor maior (ex 5)
        arrayNumbers[i] = arrayNumbers[i + 1] // Trocamos o valor de 5 pelo valor 2
        arrayNumbers[i + 1] = temp // O valor que esta com 2 agora recebe 5
        isChange = true
      }
    }
  } while (isChange)
return arrayNumbers
}
console.log(bubbleSort())


function bubbleSort() {
  const numeros = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  let temp = 0
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - (i - 1); j++) {
      if (numeros[j] > numeros[j + 1]) {
        temp = numeros[j + 1]
        numeros[j + 1] = numeros[j]
        numeros[j] = temp
      }
    }
  }
  return numeros
}

console.log(bubbleSort())


























/*
const numeros = [2, 3, 2, 4, 5, 6, 7, 7, 7, 5, 2]
const numerosRepetidos = numeros.filter((e, i, a) => a.indexOf(e) !== i) 
console.log(numerosRepetidos) 






  Resultado: Duplicate elements found.
*/

/*
let contador = 0
const a1 = ["d", "b", "c", "c", "d", "a", "a", "b"]
const a2 = ["c", "d", "c", "c", "a", "a", "d", "b"]

    const isInArray = a1.some(el => a2.includes(el))
console.log(isInArray)

const witchElement = a1.some(el => {
    for (let i = 0;  i < 4; i++) {
        if(a2[i].includes(el)) {
            contador++
            console.log(el)
            console.log(contador)
            return el
           
          }
          
        }})
        

 
const a1 = [1, 2, 3, 4, 5]
const a2 = [100, 2, 421, 4]

const witchElement = a1.some((el) => {
  if (a2.includes(el)) {
    console.log(el)
    return el
  }
})

*/
//function hasDuplicates(arr) {
 // return new Set(arr).size !== arr.length;
//}

//var arr = [ 2, 4, 6, 5, 4 ];

//if (hasDuplicates(arr)) {
 // console.log("Duplicate elements found.");
//}
//else {
 // console.log("No Duplicates found.");
//}


/*

let a = ['laranja', 'verde' , 'azul']
a.slice(2, 2)
console.log(a.slice(2, 2))
console.log(a)

const ab = (b) => {
  return b.toUpperCase()
}
console.log(ab('brincar com o Juliao'))
*/