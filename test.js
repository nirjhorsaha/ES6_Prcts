const student = {
  name: "abul",
  age: "17",
  isMale: true,
};

// array -> for of loop
// object -> for in loop

// console.log(student.name);
for (let i in student) {
    console.log(i, student[i]);
    // console.log(student[i]);
}
