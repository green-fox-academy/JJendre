import { Block } from './block';
import { Gold } from './gold';

export class Glass extends Block {
  listOfPossibleAdjacent = ['mud', 'brick', 'ice', 'air', 'glowstone', 'door'];
  transformToWhat = new Gold(160);

  constructor(color: string = 'transparent', lightTransmission: number = 99) {
    super('glass', color, lightTransmission);
  }
}
