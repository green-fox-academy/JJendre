import { Plant } from './plants';

export class Tree extends Plant {
  public constructor(color: string) {
    super(color, 0.4, 10);
  }

  public getType(): string {
    return 'Tree';
  }
}

let purpleTree = new Tree('purple');
purpleTree.getInfo();

let orangeTree = new Tree('orange');
orangeTree.getInfo();
