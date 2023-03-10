/*
13. Faça um programa que receba o nome de oito clientes e
armazene-os em um vetor. Em um segundo vetor, armazene a
quantidade de DVDs locados em 2012 por cada um destes
clientes. Sabe-se que, para cada dez locações, o cliente tem
direito a uma locação grátis. Faça um programa que mostre o
nome de todos os clientes, com a quantidade de locações
grátis a que tem direito.
*/

//-Criamos vetores vazios, para armazenar os dados de pessoas e compras.
//-Passamos a funcao, com os dados e armazenamos nos vetores.
//-Cadastramos os clientes e mapeamos os dvds comprados, dividindo por 10 e tirando
//as casas decimais.
//-Criamos um loop para automatizar o console, passamos as informacoes de saida.
const armazenaClientes = []
const comprasDvds = []
const addClientes = (nome, quantidade) => {
  armazenaClientes.push(nome)
  comprasDvds.push(quantidade)
}

addClientes("Pablo", 12)
addClientes("Ângelo", 10)
addClientes("Julio", 20)
addClientes("Renato", 34)
addClientes("Guilherme", 50)
addClientes("Willian", 80)
addClientes("Joao", 11)
addClientes("Sr.Vitorio", 5)

const dvds = comprasDvds.map(dvds => dvds >= 10 ? (dvds / 10).toFixed(0) : "0")
const clientes = armazenaClientes.map(pessoas => pessoas)
for (let i = 0; i < armazenaClientes.length; i++) {
  console.log(`Cliente: ${clientes[i]}, teve ${dvds[i]} locação grátis!`)
}
