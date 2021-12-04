// Create Student and Teacher classes
// Student
// learn() -> prints: the student is actually learning
// question(teacher) -> calls the teacher's giveAnswer() method
// Teacher
// teach(student) -> calls the student's learn() method
// giveAnswer() -> prints: the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method
class Student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  public learn(): string {
    return this.name + ' the student is actually learning';
  }
  public question(teacher: Teacher): string {
    return teacher.giveAnswer();
  }
}

class Teacher {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  public teach(student: Student): string {
    return student.learn();
  }
  public giveAnswer(): string {
    return this.name + ' the teacher is answering a question';
  }
}

let student1 = new Student('Endre');
let teacher1 = new Teacher('Vill');

console.log(student1.learn());
console.log(student1.question(teacher1));
console.log(teacher1.teach(student1));
console.log(teacher1.giveAnswer());
