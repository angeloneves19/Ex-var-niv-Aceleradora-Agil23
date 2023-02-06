const divisao = () => {
  let condicao = true;
  let contadoDoisECinco = 0;
  let contadoDoisETres = 0;
  while (condicao) {
    let leNumero = prompt("digite um numero (-1 encerra a contagem)");
    if (leNumero > 0) {
      if (leNumero % 2 === 0 && leNumero % 5 === 0) {
        contadoDoisECinco++;
      }
      if (leNumero % 2 === 0 && leNumero % 3 === 0) {
        contadoDoisETres++;
      }
    }
    if (leNumero == -1) {
      condicao = false;
    }
  }
  return `
         divisivel por 2 e por 5: ${contadoDoisECinco}
         divisivel por 2 e por 3: ${contadoDoisETres}`;
}
console.log(divisao());
