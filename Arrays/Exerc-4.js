/*
4)Desenvolva um algoritmo que permita a leitura de um vetor de 30 números inteiros,
e gere um segundo vetor com os mesmos dados, mas de maneira invertida, ou seja,
o primeiro elemento ficará na última posição, o segundo na penúltima, 
e assim por diante.
*/
//Criamos um vetor para armazenar os resultados do For!
//Também criamos outro vetor para armazenar,  o resultado dado pelo For só que invertido!
//Depois uma variavel global, para determinar que o for pararia no numero 30, pois esse foi o numero desiguinado na atividade!
//Depois puxamos o resuldo do for, e jogamos  dentro do vetor, tornandos em Array!
//Depois mapeamos o vetor e invertemos a posição no final!
//E por fim passamos tudo pelo console.log!
const vetor = []
const vetorOrdemInvertida = []
const ordemInvertida = () => {
  for (i = 1; i <= 30; i++) {
    vetor.push(i)
  }
  vetor.map((numero) => vetorOrdemInvertida.push(numero))
}
ordemInvertida()
console.log(vetor)
console.log(vetorOrdemInvertida.reverse())