import { Plant } from './plants';

export class Flower extends Plant {
  public constructor(color: string) {
    super(color, 0.75, 5);
  }

  public getType(): string {
    return 'Flower';
  }
}

let yellow = new Flower('yellow');
yellow.getInfo();

let blueFlower = new Flower('blue');
blueFlower.getInfo();
