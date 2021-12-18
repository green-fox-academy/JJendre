import { Animal } from '../Zoo/animal';
import { Flyable } from './flyable';

export class Bird extends Animal implements Flyable {
  constructor(name: string) {
    super(name, 1, 'female', 'bird');
    this.name = name;
  }
  reproduce(): string {
    return 'laying eggs,';
  }
  eating(): string {
    return 'everything';
  }
  land(): string {
    return ' lands on trees,';
  }
  fly(): string {
    return `${this.name} flies naturaly, `;
  }
  takeOff(): string {
    return ' takes off anywhere.';
  }
}
