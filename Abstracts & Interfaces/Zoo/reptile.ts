import { Animal } from './animal';

export class Reptile extends Animal {
  constructor(name: string) {
    super(name, 1, 'female', 'reptile');
    this.name = name;
  }
  reproduce(): string {
    return 'laying eggs.';
  }
  eating(): string {
    return 'everything';
  }
}
