import { FlagAndOpenMode } from 'fs/promises';
import { Helicopter } from './helicopter';
import { Vehicle } from './vehicle';
import { Bird } from './bird';

let helicopter1 = new Helicopter('Apache');
let bird1 = new Bird('Eagle');

console.log(bird1.fly() + bird1.reproduce() + bird1.land() + bird1.takeOff());
console.log(helicopter1.fly() + helicopter1.land() + helicopter1.takeOff());
