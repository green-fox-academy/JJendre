import { Block } from './block';

export class Brick extends Block {
  listOfPossibleAdjacent = ['mud', 'glass', 'air', 'door', 'window'];
  constructor(color: string = 'rgb: 144, 76, 42') {
    super('brick', color, 0);
  }
}
