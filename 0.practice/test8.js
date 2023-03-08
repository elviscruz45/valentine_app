// DESCRIPTION:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// return masked string
function maskify(str) {
  let a = "";
  for (let i = 0; i < str.length; i++) {
    if (i <= str.length - 5) {
      a += "#";
    } else {
      a += str[i];
    }
  }
  return a;
}

str = "Nananananananananananananananana Batman!";
console.log(maskify(str));

let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match("ain"));
