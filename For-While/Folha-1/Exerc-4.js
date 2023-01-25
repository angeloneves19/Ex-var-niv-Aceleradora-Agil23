//4
/*
- Criamos a função  
- 
*/
const impares = (m, n) => {
  for (let i = m ; i < n ; i++) {
    if (i % 2 ==! 0) {
      console.log(i)
    } else {
      console.log(`somente somamos numeros impares`)
    }
  }
}
impares(1, 35)