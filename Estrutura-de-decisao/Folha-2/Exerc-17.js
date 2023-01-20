//17/Ultimo <3
const quadradoRaiz = (numA, numB) => {
  if (numA > numB) {
    let raizQuadradaMaior = Math.sqrt(numA);
    let quadradoMenor = numB * numB;
    console.log(
      `raiz Quadrada do Valor ${numA} é : ${raizQuadradaMaior} e o Quadrado do ${numB} é ${quadradoMenor} `
    );
  }
  if (numB > numA) {
  }
};
quadradoRaiz(100, 3);
