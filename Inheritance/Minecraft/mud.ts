import { Block } from './block';
class Mud extends Block {
  crossed = false;
  listOfPossibleAdajents = ['brick', 'air', 'lava', 'door', 'window', 'gold'];
  constructor() {
    super('Mud', 'dark gray', 0);
  }
}

let mud1 = new Mud();
mud1.printStatus();
