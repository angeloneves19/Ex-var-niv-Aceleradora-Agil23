//1)Criamos um função global, para passar tudo no console.log.
//2)Depois criamos um let condição true, para iniciar o loop, 
//e la em baixo criamos um verificação para  parar o loop,
//usando uma interção com o usuario através do prompt.
//3)Criamos um let guardarNomes vazio, para guardar nomes capturados do prompt.
//4)Dai criamos a estrutura while, ativando ela através da varivel condição.
//5)Criamos o primeiro prompt para armazenar o nome do aluno,
// o segundo para armazenar  a nota/media do aluno, sugerda pelo usuario,
// e por fim usamos um prompt de parada para para o loop.
//6)Depois criamos um if ternário, pois so tinha uma alternativa verdadeira e a outra era falsa.
//7)No começo tinhamos criado uma variavel chamada de Maior media,
// para armazenar a maior media dentre os alunos,
//Dai na linha 25 fizemos uma verificação,  Se a media que tinha sido posta naquele momento,
//era maior que a Maiormedia armazenada.
const alunoComMaiorMedia = () => {
  condicao = true
  let maiorMedia = 0
  let guardarNomes = '' 
  while (condicao) {
    let nomeAluno = prompt("Digite o nome do aluno");
    let medias = parseInt(prompt(`Qual a media do ${nomeAluno} ?`));
    let parando = prompt("Deseja Parar Digite Pare(se sim responda sim)");
    medias >= 6
      ? alert(`Parabens ${nomeAluno} voce passou com media media ${medias}`)
      : alert(`O aluno ${nomeAluno} reprovou com media ${medias}`)
    if (medias > maiorMedia) {
      maiorMedia = medias
      guardarNomes = nomeAluno
    }
    if (parando === "sim") {
      condicao = false; 
      return document.write(`o aluno ${guardarNomes} teve a maior media ${maiorMedia}`)
    }
  }
}
console.log(alunoComMaiorMedia());
