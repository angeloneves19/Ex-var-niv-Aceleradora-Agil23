//6
/*
-criamos a função e passamos os valores por parametro
- criamos o for passando o m como o i e o n como chegada
-fizemos uma verificacao dentro do for pra ver se o i modulo(%) 3 para termos apenas os numeros divisiveis pelo messmo.
- imprimimos o i no console e passamos os dados dos parametros 
*/
const divisivelPorTres = (m, n) => {
   for(let i = m ; i < n; i++ ){
    // console.log(i)
    if(i % 3 === 0){
      console.log(i)
    }
  }
}
divisivelPorTres(4, 30)