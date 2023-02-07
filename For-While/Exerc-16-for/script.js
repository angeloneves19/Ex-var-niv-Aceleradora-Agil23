const alunoComMaiorMedia = () => {
  while (true) {
    let nomeAluno = prompt("Digite o nome do aluno")
    let media = prompt(`Qual a media do ${nomeAluno} ?`)
    media >= 6
     ? alert(`Parabens ${nomeAluno} voce passou com media media ${media}`)
     : alert(`O aluno ${nomeAluno} reprovou com media ${media}`)
    if (nomeAluno === "pare" || media === 11 ) {
       break
    }
  }
}
console.log(alunoComMaiorMedia());
