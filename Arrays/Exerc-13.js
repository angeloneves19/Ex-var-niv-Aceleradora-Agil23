/*
13. Faça um programa que receba o nome de oito clientes e
armazene-os em um vetor. Em um segundo vetor, armazene a
quantidade de DVDs locados em 2012 por cada um destes
clientes. Sabe-se que, para cada dez locações, o cliente tem
direito a uma locação grátis. Faça um programa que mostre o
nome de todos os clientes, com a quantidade de locações
grátis a que tem direito.
*/

const vetorClientes = []
const vetorDvds = []
const addClientes = (nome, quantidade) => {
  vetorClientes.push(nome)
  vetorDvds.push(quantidade)
}

addClientes("Pablo", 12) //1
addClientes("Ângelo", 10) //1
addClientes("Julio", 20) //2

const dvds = vetorDvds.map(dvds => dvds === 10? -1 : "nao ganhou disconto")
console.log(dvds)

