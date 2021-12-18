import { Instrument } from './instrument';

export abstract class StringedInstrument extends Instrument {
  protected numberOfString: number;

  constructor(numberOfString: number, name: string, sonority: string) {
    super(name, sonority);
    this.numberOfString = numberOfString;
  }

  sound(): string {
    return `${this.name}, a ${this.numberOfString}-stringed instrument that goes ${this.sonority}`;
  }
}
