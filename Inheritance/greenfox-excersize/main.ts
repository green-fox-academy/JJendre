export class Person {
  name: string;
  age: number;
  gender: string;

  constructor(
    name: string = 'Jane Doe',
    age: number = 30,
    gender: string = 'female'
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce() {
    console.log(
      "Hi, I'm " +
        this.name +
        ', a ' +
        this.age +
        ' year old ' +
        this.gender +
        '.'
    );
  }
  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}

import { Student } from './student';
import { Mentor } from './mentor';
import { Sponsor } from './sponsor';
import { Cohort } from './cohort';

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}
for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
