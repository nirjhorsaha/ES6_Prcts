const addOne = function (first, second) {
  return first + second;
};
// Using arrow function
const using_arrowFunction = (first, second) =>
    first + second;

const result = addOne(10, 20);
console.log('Using normal way:', result);

const result_usingArrowFunction = using_arrowFunction(10, 20);
console.log(`Sum of ${10} and ${20} is:`, result_usingArrowFunction);
