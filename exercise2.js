// Write a piece of code that finds the solutions for a quadratic equation. You can use the following template:
// const a = 1; b = -6; c = 9;  // stands for x**2 - 6*x + 9 = 0
// let solutionA = solutionB = 0
// // your code goes here
// console.log(solutionA, solutionB)
// You can find on Google the formula to find the solutions. Test your code on different a, b, c values (like 1, 5, 6 or 1, -1, -1)

const a = 1;
const b = -1;
const c = -1;
let solutionA = (-b + Math.sqrt(b ** 2 - 4 * c * a)) / (2 * a);
let solutionB = (-b - Math.sqrt(b ** 2 - 4 * c * a)) / (2 * a);

console.log(solutionA, solutionB);
