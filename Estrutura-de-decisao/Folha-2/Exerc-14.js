//14
const divisivelPorNumero = (num) => {
  if (num % 10 === 0) {
    console.log(`Ele é divisivel por 10`);
    if (num % 5 === 0) {
      console.log(`Ele é divisivel por 5`);
    }
  }
  if (num % 2 === 0) {
    console.log(`ele é divisivel por 2`);
  } else {
    console.log(`Ele não é divisivel, por nem um deles!`);
  }
};
divisivelPorNumero(12);
