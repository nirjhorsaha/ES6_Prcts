/* Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.
 */

const calculate = (a, b = 10) => a + b;

const add = calculate(5);
console.log(add);
