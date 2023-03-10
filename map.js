const numbers = [2, 5, 3, 8, 6];


// function doubleIt(num) {
//     return num * 2;
// }
// or
const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
// console.log(makeDouble)

const makeDouble2 = numbers.map((num) => num * 2);
console.log(makeDouble2);