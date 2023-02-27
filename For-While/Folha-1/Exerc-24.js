// 24
// Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}
var arrA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffleArray(arrA));
console.log(shuffleArray(arrA)); 
console.log(shuffleArray(arrA)); 
console.log(shuffleArray(arrA));
console.log(shuffleArray(arrA));