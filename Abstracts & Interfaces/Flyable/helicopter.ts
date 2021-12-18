import { Flyable } from './flyable';
import { Vehicle } from './vehicle';

export class Helicopter extends Vehicle implements Flyable {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  land(): string {
    return 'lands verticaly, ';
  }
  fly(): string {
    return `${this.name} helicopter flies up to 200 mph, `;
  }
  takeOff(): string {
    return 'takes off ground.';
  }
}
