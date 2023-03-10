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

const numeros = [2, 3, 2, 4, 5, 6, 7, 7, 7, 5, 2]
const numerosRepetidos = numeros.filter((e, i, a) => a.indexOf(e) !== i) 
console.log(numerosRepetidos) 





/*
  Resultado: Duplicate elements found.
*/