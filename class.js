// symtactic sugar

class Instructor{
    name;
    designation = 'Web Course Instructor'
    team = 'Web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
}

    startSupportSession(time) {
        console.log(`Start support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`Create quiz for module ${module}`);
    }
}

const Hamid = new Instructor();
// console.log(Hamid);

// Hamid.startSupportSession('9:00');
// Hamid.createQuiz(7)


const newPerson = new Instructor("Sakib", "Banani");
console.log(newPerson);