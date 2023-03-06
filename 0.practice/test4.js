// Complete the solution so that it returns true if the first argument(string)
//passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  return str.substr(-ending.length) === ending;
}

console.log(solution("aasdfsabmmcp", "bc"));

const casa = "Hello ,World!ss";
const cama = casa.substr(-11, 8);
console.log(cama);
console.log(casa.slice(-5, -1));
