import { Air } from './air';
import { Block } from './block';

export class Ice extends Block {
  listOfPossibleAdjacent = [
    'mud',
    'brick',
    'glass',
    'lava',
    'air',
    'glowstone',
  ];
  whatCanTransform = ['lava'];
  transformToWhat: Block = new Air();
  constructor() {
    super('ice', 'transparent', 97);
  }
  printStatus(): void {
    super.printStatus();
    if (this.transformPossyble === false) {
      console.log('Made no transformation');
    } else {
      console.log('Has transformed a block of type lava to glass');
    }
  }
}
