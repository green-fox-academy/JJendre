import { Block } from './block';
import { Brick } from './brick';
export class Mud extends Block {
  listOfPossibleAdjacent = ['brick', 'air', 'lava', 'door', 'window', 'gold'];
  transformToWhat: Block = new Brick();
  constructor() {
    super('mud', 'dark gray', 0);
  }
}
