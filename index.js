const leght = 5;
const cols = 10;
const min = 10;
const max = 100;

let matrix = [];
for (let i = 0; i < leght; i++) {
  matrix[i] = [];
  for (let j = 0; j < cols; j++) {
    matrix[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

console.table(matrix);

let maxSum = 0;
let maxSumleght = -1;
for (let i = 0; i < leght; i++) {
  let leghtSum = 0;
  for (let j = 0; j < cols; j++) {
    leghtSum += matrix[i][j];
  }
  console.log(`Сума елементів у рядку ${i}: ${leghtSum}`);
  if (leghtSum > maxSum) {
    maxSum = leghtSum;
    maxSumleght = i;
  }
}

console.log(`Максимальна сума елементів знаходиться в рядку ${maxSumleght} і дорівнює ${maxSum}`);
