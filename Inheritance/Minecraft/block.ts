export class Block {
  type: string;
  color: string;
  lightTransmission: number;
  crossed: boolean;
  listOfPossibleAdajents: string[];
  constructor(type: string, color: string, lightTransmission: number) {
    this.type = type;
    this.color = color;
    this.lightTransmission = lightTransmission;
    this.listOfPossibleAdajents = [];
    this.crossed = false;
  }

  canPlaceAfter(block: Block) {}

  getTransmission() {}
  printStatus(): void {
    console.log('Block of type ' + this.type + '.');
    console.log('Has light transmission: ' + this.lightTransmission);
    if (this.crossed === false) {
      console.log('Can not be crossed.');
    } else {
      console.log('Can be crossed');
    }
  }
}
