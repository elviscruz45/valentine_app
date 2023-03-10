//numbers
console.log(20e-3);
//numbers are always stored in 64 bits (0-51 are numbers, 52-62 bits exponents and 65 for the sign)
//numbers are accurate up to 15 digits
// the maximun number of decimals is 17 digits

//floating  point arithmetic is not always 100% accurate

let x = 5n;
let oct = 0o10000000000003;

console.log(oct);
console.log(typeof x);
console.log(typeof y);

let y = 256;
console.log(y.toString(16));
