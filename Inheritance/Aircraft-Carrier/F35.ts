import { Aircraft } from './aircraft';

export class F35 extends Aircraft {
  constructor(name: string) {
    super(name, 'F35', 12, 12, 50);
  }
}
