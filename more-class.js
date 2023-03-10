class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedback() {
    console.log(`${this.name} thanks for your feedback`);
  }
}

class Instructor extends TeamMember {
  designation = "Web Course Instructor";
  team = "Web team";

  constructor(name, location) {
    super(name, location);
  }

  startSupportSession(time) {
    console.log(`Start support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`Create quiz for module ${module}`);
  }
}

class Developer extends TeamMember {
  designation = "Web Course Instructor";
  team = "Web team";
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }

  developerFeature(feature) {
    console.log(`Please develop the ${feature}`);
  }
  release(version) {
    console.log(`Please release the ${version}`);
  }
}
class JobPlacement extends TeamMember {
  designation = "Job Placement Commando";
  team = "Web team";
  region;
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }

  provideResume(feature) {
    console.log(`Please develop the ${feature}`);
  }
  prepareStudents(version) {
    console.log(`Please release the ${version}`);
  }
}

// const Mushfiq = new JobPlacement('Mushfiq Islam', 'Banani', 'React');
// console.log(Mushfiq);

const Mushfiq = new Developer('Mushfiq Islam', 'Banani', 'React');
console.log(Mushfiq);
Mushfiq.provideFeedback();
