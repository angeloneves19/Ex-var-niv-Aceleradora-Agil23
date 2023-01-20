//5
const dividir = (num1, num2) => {
  let result = num1 / num2 
  if(num2 == 0){
      console.log("Não pode ser feita a divisão, pois não existe divisão por zero")
  }else{
      return console.log(`A resposta é: ${result}`)
  }
}
dividir(20, 2)
