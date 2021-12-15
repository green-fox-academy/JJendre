import { F16 } from './f16';
import { F35 } from './F35';
import { Carrier } from './carrier';
import { Aircraft } from './aircraft';

let f16black = new F16('black');
let f35dark = new F35('dark');
let f16green = new F16('green');
let f35hell = new F35('hell');

let f16cccp = new F16('cccp1');
let f16ccp = new F16('cccp2');
let f16cp = new F16('cccp3');
let f16cpp = new F16('cccp4');
let f35cppp = new F35('cccp5');

let ussRosevelt = new Carrier(1000, 5000);
ussRosevelt.add(f16black);
ussRosevelt.add(f16green);
ussRosevelt.add(f35dark);
ussRosevelt.add(f35hell);
ussRosevelt.getStatus();

let cccpLenin = new Carrier(1200, 4000);
cccpLenin.add(f16cccp);
cccpLenin.add(f16ccp);
cccpLenin.add(f16cp);
cccpLenin.add(f16cpp);
cccpLenin.add(f35cppp);
cccpLenin.getStatus();

function fightNtime(n: number) {
  for (let i = 0; i < n; i++) {
    cccpLenin.fight(ussRosevelt);
    ussRosevelt.getStatus();
    console.log('------------------------');
    cccpLenin.getStatus();
    console.log('------------------------');
    cccpLenin.fill();
    cccpLenin.getStatus();
    console.log('------------------------');
  }
}
fightNtime(4);
