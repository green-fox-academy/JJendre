import { Block } from './block';
import { Air } from './air';
import { Brick } from './brick';
import { Door } from './door';
import { Glass } from './glass';
import { Glowstone } from './glowstone';
import { Window } from './window';
import { Mud } from './mud';
import { Gold } from './gold';
import { Lava } from './lava';
import { Ice } from './ice';

export class Wall {
  listOfBlocks: Block[];
  constructor() {
    this.listOfBlocks = [];
  }

  placeBlock(block: Block): void {
    if (this.listOfBlocks.length === 0) {
      this.listOfBlocks.push(block);
    }
    // else if (
    //   this.listOfBlocks[this.listOfBlocks.length - 1].canTransform(
    //     block.type
    //   ) === true
    // ) {
    //   this.listOfBlocks[this.listOfBlocks.length - 1].blockTotransform =
    //     block.type;
    //   block = block.transformToWhat;
    //   this.listOfBlocks.push(block);
    // }
    else if (
      block.canTransform(
        this.listOfBlocks[this.listOfBlocks.length - 1].type
      ) === true
    ) {
      block.blockTotransform =
        this.listOfBlocks[this.listOfBlocks.length - 1].type;

      this.listOfBlocks[this.listOfBlocks.length - 1] =
        this.listOfBlocks[this.listOfBlocks.length - 1].transformToWhat;

      this.listOfBlocks.push(block);
    } else if (
      block.canPlaceAfter(
        this.listOfBlocks[this.listOfBlocks.length - 1].type
      ) === true
    ) {
      this.listOfBlocks.push(block);
    }
  }

  printStatus(): void {
    this.listOfBlocks.forEach(
      (element) => (element.printStatus(), console.log(''))
    );
  }
  calculateLightTransmission(): void {
    let sumOfLightTransmission: number = 0;
    this.listOfBlocks.forEach(
      (element) =>
        (sumOfLightTransmission =
          sumOfLightTransmission + element.getTransmission())
    );
    console.log(
      `Light transmitted: ${Math.round(
        sumOfLightTransmission / this.listOfBlocks.length
      )}`,
      '\n'
    );
  }
}

let greatWall = new Wall();

let air1 = new Air();
let brick1 = new Brick('dark-gray');
let door1 = new Door(2, 'Mordor', 'black', 60);
let glass1 = new Glass('', 60);
let glowstone1 = new Glowstone();
let window1 = new Window(1, 'Liliput', 'white', 70, true);
let window2 = new Window(2, 'Asgard', 'light-gray', 90, true);
let mud1 = new Mud();
let gold1 = new Gold(50);
let lava1 = new Lava();
let glowstone2 = new Glowstone();
let ice1 = new Ice();
let lava2 = new Lava();
let gold2 = new Gold(30);
let ice2 = new Ice();

greatWall.placeBlock(air1);
greatWall.placeBlock(brick1);
greatWall.placeBlock(door1);
greatWall.placeBlock(glass1);
greatWall.placeBlock(glowstone1);
greatWall.placeBlock(window1);
greatWall.placeBlock(window2);
greatWall.placeBlock(mud1);
greatWall.placeBlock(gold1);
greatWall.placeBlock(lava1);
greatWall.placeBlock(glowstone2);
greatWall.placeBlock(ice1);
greatWall.placeBlock(lava2);
greatWall.placeBlock(gold2);
greatWall.placeBlock(ice2);

greatWall.calculateLightTransmission();
greatWall.printStatus();
