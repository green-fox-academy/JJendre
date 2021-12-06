// # Sharpie Set
// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie, named listOfSharpies
// it has a method that adds a new Sharpie to the set: add(sharpie: Sharpie)
// it has a method that returns the number of usable Sharpies: countUsable() -> sharpie is usable if it contains ink
// it has a method that removes all unusable Sharpies: removeTrash()
import { Sharpie } from './sharpie';
export class SharpieSet {
  private listOfSharpies: Sharpie[] = [];

  add(sharpie: Sharpie): void {
    this.listOfSharpies.push(sharpie);
  }
  countUsable(): number {
    let useable: number = 0;
    for (let i: number = 0; i < this.listOfSharpies.length; i++) {
      if (this.listOfSharpies[i].getInkAmount() > 0) {
        useable++;
      }
    }
    return useable;
  }
  removeTrash(): void {
    for (let i: number = 0; i < this.listOfSharpies.length; i++) {
      if (this.listOfSharpies[i].getInkAmount() <= 0) {
        this.listOfSharpies.splice(i, 1);
      }
    }
  }
  public getListOfSharpies() {
    return this.listOfSharpies;
  }
}
const sharpie1 = new Sharpie('yellow', 8, 50);
const sharpie2 = new Sharpie('black', 5);
const sharpieSet = new SharpieSet();
sharpieSet.add(sharpie1);
sharpieSet.add(sharpie2);
console.log(sharpieSet.countUsable());
sharpie1.use();
sharpie1.use();
sharpie1.use();
sharpie1.use();
sharpieSet.removeTrash();
console.log(sharpieSet.countUsable());
console.log(sharpieSet);
