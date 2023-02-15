//24
let contadorSubtracoes = 0
const tirandoARaiz = (num) => {
  for (let i = 1; i <= num; i++) {
    if(i % 2 !== 0){
       contadorSubtracoes++
    }
  }
console.log(contadorSubtracoes)
}
tirandoARaiz(16)