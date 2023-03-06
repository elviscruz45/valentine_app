const fruits = ["apple", "banana", "orange", "pear"];
const removed = fruits.splice(1, 2, "grape", "pineapple");

console.log(fruits); // ["apple", "grape", "pineapple", "pear"]
console.log(removed); // ["banana", "orange"]
