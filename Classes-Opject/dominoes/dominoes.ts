import { Domino } from './domino';

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

let dominoArray: number[][] = [];
function print(dominoes: Domino[]) {
  for (let i = 0; i < dominoes.length; i++) {
    let dominoi: number[] = dominoes[i].getValues();
    let value0: number = dominoes[i].getValues()[0];
    let value1: number = dominoes[i].getValues()[1];
    dominoArray.push(dominoi);
  }
  dominoes.forEach(function (value) {});
}
let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

print(dominoes);
let finalArray: number[][] = [];
finalArray.push(dominoArray[0]);
function doTheLoop() {
  for (let i = 0; i < dominoArray.length; i++) {
    if (finalArray[finalArray.length - 1][1] === dominoArray[i][0]) {
      finalArray.push(dominoArray[i]);
    }
  }
}
while (finalArray.length < 5) {
  doTheLoop();
}

console.log(finalArray);
