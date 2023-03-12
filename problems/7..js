/* You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ].  */

const number = [1, 3, 5, 7, 9];

addOne = number.map((val) => {
  return val + 1;
});
console.log(addOne);
