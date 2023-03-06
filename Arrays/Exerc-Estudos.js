// * criar uma variavel de nome person
// * criar uma funcao com nome addPerson
// * fazer com que essa funcao adcione um obj em um array com as seguintes informacoes
// - id
// - nome
// - data de nascimento
// - status
// - peso
// - altura

const person = []
const addPerson = (nome, nascimento, peso, altura) => {
  const pushPerson = person.push({
    id: person.length + 1,
    nome: nome,
    nascimento: nascimento,
    status: "inativo",
    peso: peso,
    altura: altura
  })
}

addPerson("Angelo", "14/02/2005", 135, 180)
addPerson("Pablo", "14/05/2002", 66, 178)
addPerson("Juliao", "19/05/1990", 80, 183)
//console.log(person[2].altura)

const tornandoAtivo = (nome) =>{
  const a =  person.find(pessoa => pessoa.nome === nome )
    return a.status = "ativo"
}
console.log(tornandoAtivo("Pablo"))
console.log(person[1])