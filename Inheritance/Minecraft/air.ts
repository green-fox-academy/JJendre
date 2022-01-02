import { Block } from './block';

export class Air extends Block {
  crossed = true;
  listOfPossibleAdjacent = ['mud', 'brick', 'glass', 'door', 'window', 'gold'];
  constructor() {
    super('air', 'transparent', 100);
  }
}
