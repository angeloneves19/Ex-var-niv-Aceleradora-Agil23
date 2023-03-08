/*11.
  Faça um programa para corrigir provas de múltipla
  escolha. Cada prova tem oito questões e cada questão vale um
  ponto. O primeiro conjunto de dados a ser lido é o gabarito da
  prova. Os outros dados são os números dos alunos e as
  respostas que deram às questões. Existem dez alunos
  matriculados. Calcule e mostre:
  a. O número e a nota de cada aluno;
  b. A percentagem de aprovação, sabendo-se que a nota
  mínima é 6.

  */

const vetorGabarito = ["d", "b", "c", "c", "d", "a", "a", "b"]
const vetorAlunos = []
const resultado = (gabaritoAluno) => {
  let contador = 0
  for (let i = 0; i < vetorGabarito.length; i++) {
    if (vetorGabarito[i] === gabaritoAluno[i]) {
      contador++
    }
  }
  return contador
}
const addAlunos = (nome, gabarito) => {
  vetorAlunos.push({
    id: vetorAlunos.length + 1,
    nome: nome,
    gabarito: gabarito,
    nota: resultado(gabarito)
  })
}

addAlunos("Carlos Eduardo", ["c", "d", "c", "c", "a", "a", "d", "b"])
addAlunos("Danilo", ["d", "b", "c", "c", "d", "a", "a", "b"])
addAlunos("Fabio", ["b", "d", "c", "a", "b", "a", "c", "d"])
addAlunos("Gabriel", ["d", "b", "c", "c", "d", "a", "a", "b"])
addAlunos("Igor", ["a", "b", "d", "a", "c", "a", "a", "b"])
addAlunos("Julio", ["d", "b", "c", "c", "d", "a", "a", "b"])
addAlunos("Matheus", ["d", "b", "c", "c", "d", "a", "a", "b"])
addAlunos("Pablo", ["d", "b", "c", "c", "d", "a", "a", "b"])
addAlunos("Renatinho", ["d", "b", "a", "c", "d", "a", "a", "b"])
const mediaSeis = vetorAlunos.filter((num) => num.nota > 5)
console.log(((mediaSeis.length * 100) / vetorAlunos.length).toFixed(2))
