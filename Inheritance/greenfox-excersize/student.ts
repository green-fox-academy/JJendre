import { Person } from './main';

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number = 0;

  constructor(
    name: string = 'Jane Doe',
    age: number = 30,
    gender: string = 'female',
    previousOrganization = 'The School of Life'
  ) {
    super(name, age, gender);

    this.previousOrganization = previousOrganization;
  }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce() {
    console.log(
      "Hi, I'm " +
        this.name +
        ', a ' +
        this.age +
        ' year old ' +
        this.gender +
        ' from ' +
        this.previousOrganization +
        ' who skipped ' +
        this.skippedDays +
        ' days from the course already.'
    );
  }

  skipDays(numberOfDays: number) {
    return (this.skippedDays += numberOfDays);
  }
}
