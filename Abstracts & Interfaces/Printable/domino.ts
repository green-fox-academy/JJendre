import { Printable } from './printable';

export class Domino implements Printable {
  sideA: number;
  sideB: number;
  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
  printAllFields(): string {
    return `Domino A side: ${this.sideA} , B side: ${this.sideB}`;
  }
}
