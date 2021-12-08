// Reuse your Animal class
// Create a Farm class
// it has a list of Animals listOfAnimals
// it has a limit that defines how many animals can be kept in the Farm and can be set when the Farm is created
// it has two methods:
// breed() -> creates a new animal if there's limit for it
// sell() -> removes the least hungry animal
import { Animal, dog } from './animal';

export class Farm {
  public limit: number;
  public listOfAnimals: Animal[] = [];

  constructor(limit: number) {
    this.limit = limit;
  }
  breed(animal: Animal): void {
    if (this.listOfAnimals.length >= this.limit) {
      console.log("Animal couldn't add.There is no more limit");
    } else {
      this.listOfAnimals.push(new Animal());
    }
  }
  sell(): void {
    this.listOfAnimals.sort((a: Animal, b: Animal) => a.hunger - b.hunger);
    this.listOfAnimals.splice(0, 1);
  }

  getListOfAnimals(): Animal[] {
    return this.listOfAnimals;
  }
  getLimit(): number {
    return this.limit;
  }
}

let littleFarm: Farm = new Farm(30);
let birka: Animal = new Animal(10, 20);
let disznoo: Animal = new Animal();
let kecske: Animal = new Animal();
let luu: Animal = new Animal();
let tehen: Animal = new Animal();

birka.eat();
birka.eat();
birka.eat();
kecske.drink();
luu.play();
tehen.eat();
littleFarm.breed(birka);
littleFarm.breed(disznoo);
littleFarm.breed(tehen);
littleFarm.breed(kecske);
littleFarm.breed(luu);
littleFarm.breed(dog);
console.log(littleFarm.listOfAnimals.length);
littleFarm.sell();

console.log(littleFarm.getListOfAnimals);
console.log(littleFarm.listOfAnimals.length);
console.log(littleFarm.listOfAnimals);
console.log(Farm);
console.log(littleFarm.getLimit());
