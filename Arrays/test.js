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