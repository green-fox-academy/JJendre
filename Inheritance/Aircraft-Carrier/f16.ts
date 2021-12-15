import { Aircraft } from './aircraft';

export class F16 extends Aircraft {
  constructor(name: string) {
    super(name, 'F16', 8, 8, 30);
  }
}
