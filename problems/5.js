/* Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
 */

const element = [2, 4, 6, 9, 3, 5];

const calculation = element.map((arr) => arr ** 2);
console.log(`Square of each array element: ${calculation}`);

function sumOFSquare(first, second) {
  return first + second;
}

const sumOfSquaredElements = calculation.reduce(sumOFSquare);
console.log(`Sum of squared element is: ${sumOfSquaredElements}`);

const averageSquaredElements = sumOfSquaredElements / element.length;
console.log(`average of the sum of the squared elements: ${averageSquaredElements}`);

