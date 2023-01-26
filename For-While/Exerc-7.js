//7
//1)Recebe valor m e n.
//2)Criamos o for, que foi basicamente dar a posição zero para o I.
//dai dizemos enquanto o I for menor que o N, acresenta +1, 
//até chegar no resultado desejado.

//resolucao com for 
//Por algum motivo quando queremos passar um valor maior que 1(i++) temos que adicionar o igual (i +=numero)
const lendoNumeros = (valorInicial, incremento, valorFinal) =>{
  for(let i = valorInicial; i < valorFinal; i +=incremento){
   console.log(i)
  }
}
lendoNumeros(0, 4, 30);

//resolucao com while
