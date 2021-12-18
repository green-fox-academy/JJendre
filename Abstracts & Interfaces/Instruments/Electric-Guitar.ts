import { StringedInstrument } from './stringed-instrument';

export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6) {
    super(numberOfStrings, 'Electric Guitar', 'Twang');
    this.numberOfString = numberOfStrings;
  }
}
