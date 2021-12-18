import { Animal } from './animal';

export class Mammal extends Animal {
  constructor(name: string) {
    super(name, 1, 'female', 'mammal');
    this.name = name;
  }
  reproduce(): string {
    return 'pushing miniature versions out.';
  }
  eating(): string {
    return 'everything';
  }
}
