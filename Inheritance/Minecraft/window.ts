import { Block } from './block';

type RangeType = 1 | 2 | 3;
export class Window extends Block {
  crossed = false;
  quality: RangeType;
  listOfPossibleAdjacent = ['mud', 'brick', 'air', 'door', 'glowstone'];
  constructor(
    quality: RangeType,
    producerName: string,
    color: string,
    lightTransmission: number,
    crossed: boolean
  ) {
    super('window', color, lightTransmission);
    this.quality = quality;
    this.producerName = producerName;
    this.crossed = crossed;
  }
  printStatus(): void {
    super.printStatus();
    console.log(
      `Manufactured by ${this.producerName} on quality level ${this.quality}`
    );
  }
}
