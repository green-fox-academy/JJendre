import { StringedInstrument } from './stringed-instrument';

export class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super(numberOfStrings, 'Bass Guitar', 'Duum-duum-duum');
    this.numberOfString = numberOfStrings;
  }
}
