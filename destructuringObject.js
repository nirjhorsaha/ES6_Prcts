const person = {
    name: 'Hero Alom',
    age: 30,
    phone: 01234556,
    address: 'chader desh',
}

// const { name, age } = person;
// console.log(name, age);
// console.log(age, name);

// change variable name
// const { name, age, address: bari } = person;
// console.log(name, bari);

// using spreading operator
// const { name, age, ...remaining } = person;
// console.log(remaining);

// const person2 = person;
// person2.isMale = true;
// console.log(person2);
// console.log(person);

const person2 = { ...person };
person2.isMale = true;
console.log(person2);
console.log(person);
