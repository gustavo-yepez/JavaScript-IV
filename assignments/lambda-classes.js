// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;
    }
    speak() {
      return `Hello, my name is ${this.name} I am from ${this.location}`;
    }
  };

  class Instructor extends Person{
    constructor(Instructor) {
      super(Instructor)
      this.specialty = instructorAttrs.specialty;
	    this.favLanguage = instructorAttrs.favLanguage;
	    this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject){
      return `Today we learned about ${subject}`;
    };

    testResults(student, subject){
        return `${student} receives a perfect score on ${subject}`;
    }

    grade(student){
        return Student.grade = `${student} gets a ${Math.floor(Math.random() * 101) + 1} on today's test`;
    }
  };

  class student extends Person{
    constructor(studentAttrs){
      super(studentAttrs)
      this.previousBackground = studentAttrs.previousBackground;
	    this.className = studentAttrs.className;
	    this.favSubjects = studentAttrs.favSubjects;
	    this.grade = [];
    }
    listsSubject(){
      return `My favorite subjects are ${this.favSubjects}`;
    }

    PRAssingment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun the sprint challenge on ${subject}`;
    }
  };

  class projectManager extends Instructor {
    constructor(pm){
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }


    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, stand up time!`;
    }


    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    }
};



