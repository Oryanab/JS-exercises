// Write a piece of code that calculates the absolute value of a given number,
// WITHOUT using Math.abs (though you still can use other Math methods).
// const num = -8
// let absolute;
// // your code goes here
// console.log(absolute)
// Test your code on positive numbers, negative numbers, and zero.

const num = 88;
let absolute;
{
  num >= 0 ? (absolute = num) : (absolute = num * -1);
}
console.log(absolute);
