const people = [
    { name: 'meena', age: 20},
    { name: 'reena', age: 15},
    { name: 'suchorita', age: 22},
    { name: 'purnota', age: 25},
]

const ageSum= people.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue.age;
}, 0);

console.log(ageSum);

