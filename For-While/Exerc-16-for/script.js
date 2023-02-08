const alunoComMaiorMedia = () => {
  condicao = true;
  let maiorMedia = 0;
  while (condicao) {
    let nomeAluno = prompt("Digite o nome do aluno");
    let medias = parseInt(prompt(`Qual a media do ${nomeAluno} ?`));
    let parando = prompt("Deseja Parar Digite Pare(se sim responda sim)");
    medias >= 6
      ? alert(`Parabens ${nomeAluno} voce passou com media media ${medias}`)
      : alert(`O aluno ${nomeAluno} reprovou com media ${medias}`);
    if (medias > maiorMedia) {
      maiorMedia = medias;
    }
    if (parando === "sim") {
      condicao = false;
      return `o aluno ${nomeAluno} teve a maior media ${maiorMedia}`;
    }
  }
};
console.log(alunoComMaiorMedia());
