import { Plant } from './plants';
import { Tree } from './trees';
import { Flower } from './flowers';

class Garden {
  private plants: Plant[];

  public constructor() {
    this.plants = [];
  }

  public addPlant(plant: Plant): void {
    this.plants.push(plant);
  }

  public printInfo() {
    this.plants.forEach((element) => element.getInfo());
  }

  public waterTheGarden(amount: number): void {
    let thirstyPlants: Plant[] = [];
    this.plants.forEach((element) => {
      if (element.water() < element.thirst()) {
        thirstyPlants.push(element);
      }
    });
    thirstyPlants.forEach((element) =>
      element.watering(amount / thirstyPlants.length)
    );
    console.log('Watering with: ' + amount);
    this.printInfo();
  }
}

let yellowFlower = new Flower('yellow');
let blueFlower = new Flower('blue');
let purpleTree = new Tree('purple');
let orangeTree = new Tree('orange');

let orientEden = new Garden();

orientEden.addPlant(yellowFlower);
orientEden.addPlant(blueFlower);
orientEden.addPlant(purpleTree);
orientEden.addPlant(orangeTree);

orientEden.waterTheGarden(40);
orientEden.waterTheGarden(70);
