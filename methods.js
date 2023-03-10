const students = {
    name: 'Rahim',
    age: 25,
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        console.log(this.name, 'is participating in an exam');
    },
    improveExam: function (subject) {
        // this.exam();
        return `${this.name} is taking improve exam on ${subject}`
    }
}

// console.log(students);

// students.exam();

const reExam = students.improveExam('algebra');
// console.log(reExam);
