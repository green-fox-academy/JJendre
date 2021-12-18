import { Animal } from './animal';

export class Bird extends Animal {
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
}
