  /*15. Faça um programa que preencha um vetor com os modelos de cinco carros. 
  Carregue outro vetor com o consumo destes carros, isto é, quantos quilômetros 
  cada um deles faz com um litro de combustível,calcule e mostre:
  a. O modelo de carro mais econômico.
  b. Quantos litros de combustível cada um dos carros cadastrados consomem 
  para percorrer uma distância de 1.000 quilômetros.*/
const carros = [] 
const consumoPorLitro = []

const concenssionaria = (carro, kmPorLitro) => {
  carros.push(carro);
  consumoPorLitro.push(kmPorLitro)
}
concenssionaria("logan 1.0", 14)
concenssionaria("fiat uno 1.0", 16)
concenssionaria("kwid", 15)
concenssionaria("hb20 1.6", 12)
concenssionaria("gol g7", 13)
  let kmMenor = consumoPorLitro[0]
for(let i = 0; i < consumoPorLitro.length ; i++){
if(consumoPorLitro[i] < kmMenor){
  kmMenor = i
}
}
console.log(carros[kmMenor])














// console.log(carros)
// console.log(consumoPorLitro)

  // teste.push({
  //   id: teste.length + 1,
  //   nome: carros,
  //   kmPorLitro: consumoPorLitro,
  // })

















































































//console.log(custoBeneficio())

///const custoBeneficio = () => {
//for(let i= 0; i < carros.length ; i++){
//  `o carro ${carros[i]} percorre por litro ${consumoPorLitro[i]} km/l`
//let maiorKm = consumoPorLitro.sort().pop()
//return carros.sort()   //`o carro que corre mais é ${carros[i]} com ${}`

//}
//}
