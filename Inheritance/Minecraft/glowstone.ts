import { Block } from './block';

export class Glowstone extends Block {
  listOfPossibleAdjacent = ['glass', 'ice', 'air', 'lava'];
  whatCanTransform = ['glass'];
  constructor() {
    super('glowstone', 'white', 300);
  }
  printStatus(): void {
    super.printStatus();
    if (this.transformPossyble === false) {
      console.log('Made no transformation');
    } else {
      console.log('Has transformed a block of type glass to gold');
    }
  }
}
