import { Block } from './block';

export class Gold extends Block {
  listOfPossibleAdjacent = ['glowStone', 'glass'];
  constructor(lightTransmission: number) {
    super('gold', 'rgb: 255,215,0', lightTransmission);
  }
}
