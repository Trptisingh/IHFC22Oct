// JavaScript Comparison Operators

let a = 10;
let b = 20;
let c = "10";

console.log("a =", a, ", b =", b, ", c =", c);

// Equal to (==)
console.log("a == b ➜", a == b); // false
console.log("a == c ➜", a == c); // true (checks value only)

// Strict equal to (===)
console.log("a === c ➜", a === c); // false (checks value + type)

// Not equal (!=)
console.log("a != b ➜", a != b); // true

// Strict not equal (!==)
console.log("a !== c ➜", a !== c); // true

// Greater than (>)
console.log("a > b ➜", a > b); // false

// Less than (<)
console.log("a < b ➜", a < b); // true

// Greater than or equal to (>=)
console.log("a >= 10 ➜", a >= 10); // true

// Less than or equal to (<=)
console.log("b <= 20 ➜", b <= 20); // true
