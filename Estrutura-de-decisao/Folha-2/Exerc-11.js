//11
const somaQuatroNumeros = (a, b, c, d) => {
  if (a > b && a > c && a > d) {
    console.log(`${a} é o maior numero entre os outros`);
  }
  if (b > a && b > c && b > d) {
    console.log(`${b} é o maior numero entre os outros`);
  }
  if (c > d && c > a && c > b) {
    console.log(`${c} é o maior numero entre os outros`);
  }
  if (d > a && d > b && d > c) {
    console.log(`${d} é o maior numero entre os outros`);
  }
  if (a < b && a < c && a < d) {
    console.log(`${a} é o menor numero entre os outros`);
  }
  if (b < a && b < c && b < d) {
    console.log(`${b} é o menor numero entre os outros`);
  }
  if (c < d && c < a && c < b) {
    console.log(`${c} é o menor numero entre os outros`);
  }
  if (d < a && d < b && d < c) {
    console.log(`${d} é o menor numero entre os outros`);
  }
};
somaQuatroNumeros(-3, 5, 1, 2);
