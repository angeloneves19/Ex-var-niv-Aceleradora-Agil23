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
  let gabarito = []
  let contador = 0
  gabarito.push('d', 'b', 'c', 'c', 'd', 'a', 'a', 'b')
  //console.log(gabarito)
  let nomes = ["Gabarito" ,"Carlos Eduardo" , "Danilo", "Fabio", "Gabriel", "Igor", "Julio", "Matheus", "Pablo", "Renatiinho"]
  nomes[0] = ['d', 'b', 'c', 'c', 'd', 'a', 'a', 'b']//8
  nomes[1] = ['c', 'd', 'c', 'c', 'a', 'a', 'd', 'b']//4
  nomes[2] = ['d', 'b', 'c', 'c', 'd', 'a', 'a', 'b']//8
  nomes[3] = ['b', 'd', 'c', 'a', 'b', 'a', 'c', 'd']//3
  nomes[4] = ['a', 'b', 'd', 'a', 'c', 'a', 'a', 'b']//4
  nomes[5] = ['d', 'b', 'c', 'c', 'd', 'a', 'a', 'b']//8
  nomes[6] = ['c', 'b', 'c', 'a', 'd', 'a', 'a', 'a']//5
  nomes[7] = ['d', 'b', 'c', 'c', 'd', 'a', 'a', 'b']//8
  nomes[8] = ['b', 'b', 'c', 'a', 'd', 'a', 'a', 'a']//5
  nomes[9] = ['d', 'b', 'a', 'c', 'd', 'a', 'a', 'b']//7
  //  console.log(nomes)
  for(let i = 0 ; i < nomes.length; i++){
    if(gabarito.toString() === nomes[i].toString()){
      contador++
      // console.log(nomes[i])
    }
    console.log(contador)
  }
  