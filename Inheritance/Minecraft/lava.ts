import { Block } from './block';
import { Glass } from './glass';

export class Lava extends Block {
  listOfPossibleAdjacent = ['mud', 'brick', 'glass', 'ice', 'air', 'glowstone'];
  whatCanTransform = ['mud', 'ice'];
  transformToWhat: Block = new Glass('transparent', 99);
  constructor() {
    super('lava', 'yellow', 170);
  }
  printStatus(): void {
    super.printStatus();
    if (this.transformPossyble === false) {
      console.log('Made no transformation');
    } else if (
      this.transformPossyble === true &&
      this.blockTotransform === 'mud'
    ) {
      console.log('Has transformed a block of type mud to brick');
    } else if (
      this.transformPossyble === true &&
      this.blockTotransform === 'ice'
    ) {
      console.log('Has transformed a block of type ice to air');
    }
  }
}
