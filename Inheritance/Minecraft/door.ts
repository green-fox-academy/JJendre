import { Block } from './block';

type RangeType = 1 | 2 | 3;
export class Door extends Block {
  crossed = true;
  quality: RangeType;
  listOfPossibleAdjacent = ['mud', 'brick', 'air', 'window'];
  constructor(
    quality: RangeType,
    producerName: string,
    color: string,
    lightTransmission: number
  ) {
    super('door', color, lightTransmission);
    this.quality = quality;
    this.producerName = producerName;
  }
  printStatus(): void {
    super.printStatus();
    console.log(
      `Manufactured by ${this.producerName} on quality level ${this.quality}`
    );
  }
}
