const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((currentValue, index, aa) => {
  console.log(`currentValue: ${currentValue}, index: ${index}, array: ${aa}`);
  return currentValue * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const numbers2 = [1, 2, 3, 4, 5];

const doubledNumbers2 = numbers2.forEach((currentValue, index, aa) => {
  currentValue * 2;
});

console.log(numbers2);
