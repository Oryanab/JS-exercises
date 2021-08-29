// Write a piece of code that computes the sum of digits of a 3-digit number. You can use the template below:
// const num = 123
// let sum = 0
// // your code goes here
// console.log(sum)
// Test your code on several different 3-digit numbers (for example 666, 300, 725). Hint: you might need to use Math.floor...

const num = 123;
let sum = 0;
const stringNum = num.toString();

for (let i = 0; i < stringNum.length; i++) {
  sum += parseInt(stringNum[i]);
}

console.log(sum);
