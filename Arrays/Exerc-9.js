/*9. Crie um algoritmo que leia a pontuação final de 200
provas de um concurso e os nomes dos respectivos
participantes, e apresente uma lista dos colocados que
obtiveram mais de 70 pontos*/

const vetorCadastro = [];

const listaDeCadastro = (nome, nota) => {
  vetorCadastro.push({
    nome: nome,
    nota: nota 
  })
}
listaDeCadastro("Pablo", 70)
listaDeCadastro("Julio", 50)
listaDeCadastro("Angelo", 90)

const verificacao = vetorCadastro.map(pessoa => pessoa.nome)
// console.log(verificacao)

const aprovados = () => {
  verificacao.map(resultados => resultados.notas > 70 ? `${resultados.nome} foi aprovado `: `${resultados.nome} foi reprovado`)
  return verificacao.notas = "aprovados"
}
console.log(aprovados)
