//13
const descendente = (a, b, c) => {
  if (a > b && a > c) {
    console.log(`${a}`);
  }
  if (b > a && b > c) {
    console.log(`${b}`);
  }
  if (c > a && c > b) {
    console.log(`${c}`);
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
  if (a < b && a < c) {
    console.log(`${a}`);
  }
  if (b < a && b < c) {
    console.log(`${b}`);
  }
  if (c < a && c < b) {
    console.log(`${c} `);
  }
};
descendente(2, 3, 1);