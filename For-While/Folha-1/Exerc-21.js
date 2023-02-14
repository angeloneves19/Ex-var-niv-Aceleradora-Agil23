//21
//Primeiro criamos uma variavel global, para passar tudo certinho!
//Depois criamos uma variavel para armazenar os numeros divididos!
//Em seguida criamos um laço de repeetição For.
//Depois criamos uma verificação Se o resto da divisão fosse 0 ele contaria!
//Dai em seguida criamos uma verificação Se o numero que restou da verificação acima fosse 2 o numero seria primo!
//Se não, ele não seria primo!
const numerosPrimos = (num) => {
  let divisores = 0
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      divisores++
    }
  }
  if (divisores == 2) {
    console.log(`É primo`)
  } else {
    console.log(`Não é primo`)
  }
}

