/* You are given an array say: . Now
return/get all the elements which are divisible by 10 using
array.filter() method. */

const number = [33, 50, 79, 78, 90, 101, 30];

const filteredArray = number.filter((n) => {
    return n % 10;
});
console.log(filteredArray);