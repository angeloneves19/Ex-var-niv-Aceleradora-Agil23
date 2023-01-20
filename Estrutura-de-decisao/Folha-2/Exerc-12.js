//12
const acresente = (a, b, c) => {
  if (a < b && a < c) {
    console.log(`${a}`);
  }
  if (b < a && b < c) {
    console.log(`${b}`);
  }
  if (c < a && c < b) {
    console.log(`${c} `);
  }
  if ((a < c && a > b) || (a > c && a < b)) {
    console.log(`${a}`);
  }
  if ((b < a && b > c) || (b > a && b < c)) {
    console.log(`${b}`);
  }
  if ((c < a && c > b) || (c > a && c < b)) {
    console.log(`${c}`);
  }
  if (a > b && a > c) {
    console.log(`${a}`);
  }
  if (b > a && b > c) {
    console.log(`${b}`);
  }
  if (c > a && c > b) {
    console.log(`${c}`);
  }
};

acresente(2, 3, 1);
