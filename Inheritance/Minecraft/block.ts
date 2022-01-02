type RangeType = 1 | 2 | 3;
export class Block {
  type: string;
  color: string;
  lightTransmission: number;
  crossed: boolean;
  listOfPossibleAdjacent: string[];
  transformPossyble: boolean = false;
  whatCanTransform: string[] = [];
  blockTotransform: string = '';
  transformToWhat: any;
  producerName?: string;
  quality?: RangeType;

  constructor(type: string, color: string, lightTransmission: number) {
    this.type = type;
    this.color = color;
    this.lightTransmission = lightTransmission;
    this.listOfPossibleAdjacent = [];
    this.crossed = false;
  }

  canPlaceAfter(block: string): boolean {
    return this.listOfPossibleAdjacent.indexOf(block) > -1;
  }

  getTransmission() {
    return this.lightTransmission;
  }
  printStatus(): void {
    console.log(`Block of type ${this.type}.`);
    console.log(`Has light transmission: ${this.lightTransmission}`);
    if (this.crossed === false) {
      console.log('Can not be crossed.');
    } else {
      console.log('Can be crossed');
    }
  }
  canTransform(block: string): boolean {
    return (this.transformPossyble = this.whatCanTransform.indexOf(block) > -1);
  }
}
