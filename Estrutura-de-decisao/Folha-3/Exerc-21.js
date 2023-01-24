//21-ultima atividade
// 1 hora == 60 minutos
// 1 minuto == 60 segundos
//1 segundo == 1000 milissegundos

/*
- construimos a funcao arrow e passamos a hora e os minutos 
por parametros.
- convertemos os minutos e os segundos e colocamos numa constante,
 multiplicando pelos valores acima.
- retornamos o valores passando todas as conversōes e organizando com template string.-
-chamamos a funcao e passamos os valores dos parametros. 

*/

const relogio = (hora, minutos) => {
  const horaEmMinutos = hora * 60
  const totalMinutos = minutos + horaEmMinutos
  const minutoSegundos = totalMinutos * 60
  return `
        sua Hora é ${hora}:${minutos}
        - hora digitada convertida em minutos: ${horaEmMinutos} minutos
        - total de minutos: ${totalMinutos} minutos
        - total de minutos ventvertidos em segundos: ${minutoSegundos} segundos`;
};
console.log(relogio(12, 30))
