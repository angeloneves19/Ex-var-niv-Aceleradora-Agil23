// //8
const divisivel = (a, b) => {
  let result = a % b;
  if (result === 0) {
    console.log(`resultado igual a : ${result} `);
  } else {
    console.log(`O resultado não divisivel por B`);
  }
};
divisivel(18, 3);