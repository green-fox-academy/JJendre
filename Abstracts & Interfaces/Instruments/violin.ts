import { StringedInstrument } from './stringed-instrument';

export class Violin extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super(numberOfStrings, 'Violin', 'Screech');
    this.numberOfString = numberOfStrings;
  }
}
