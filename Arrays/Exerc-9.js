/*9. Crie um algoritmo que leia a pontuação final de 200
provas de um concurso e os nomes dos respectivos
participantes, e apresente uma lista dos colocados que
obtiveram mais de 70 pontos*/

//Criamos primeiramente um vetor, para tornalos um Array!
//Depois um objeto, para registrar o nome e a nota final do aluno(a)!
//Dai registramos os alunos(as)!
//Dai varemos o vetor com o For, verificamos quem havia passado!
//E retornamos no console, somente quem passou!

const vetorCadastro = []
const listaDeCadastro = (nome, nota) => {
  vetorCadastro.push({
    nome: nome,
    nota: nota,
  })
}
listaDeCadastro("Fernanda", 100)
listaDeCadastro("Pablo", 70)
listaDeCadastro("Julio", 50)
listaDeCadastro("Angelo", 90)

const aprovados = () => {
  for (let i = 0; i < vetorCadastro.length; i++) {
    if (vetorCadastro[i].nota >= 70) {
      console.log(`${vetorCadastro[i].nome} Aprovado(a)`)
    }
  }
}
aprovados()