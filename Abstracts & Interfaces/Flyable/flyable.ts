// Create a Flyable interface
// it should have land, fly and takeOff methods (TakeOff in C#)
// Create an abstract Vehicle class
// it should have at least 3 fields
// Extend Helicopter class from Vehicle
// implement your Flyable interface
// Extend Bird from your abstract Animal class (zoo exercise)
// implement your Flyable interface
import { Animal } from '../Zoo/animal';
export interface Flyable {
  land(): string;
  fly(): string;
  takeOff(): string;
}

class Bird extends Animal implements Flyable {
  constructor(name: string) {
    super(name, 1, 'female', 'bird');
    this.name = name;
  }
  reproduce(): string {
    return 'laying eggs.';
  }
  eating(): string {
    return 'everything';
  }
  land(): string {
    return 'lands on trees.';
  }
  fly(): string {
    return `${this.name} flies naturaly.`;
  }
  takeOff(): string {
    return 'takes off anywhere.';
  }
}
