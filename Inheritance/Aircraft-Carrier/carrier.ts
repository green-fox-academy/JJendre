import { Aircraft } from './aircraft';
import { F16 } from './f16';
import { F35 } from './F35';
export class Carrier {
  aircrafts: Aircraft[] = [];
  storedAmmo: number;
  health: number;

  constructor(storedAmmo: number, health: number) {
    this.storedAmmo = storedAmmo;
    this.health = health;
  }
  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill(): void {
    let aircrftTofill: Aircraft[] = [];
    this.aircrafts.forEach((element) => {
      if (element.ammunition < element.maxAmmo) {
        aircrftTofill.push(element);
      }
    });
    aircrftTofill.forEach((element) => {
      if (
        element.isPriority() === true &&
        this.storedAmmo > element.ammunition
      ) {
        this.storedAmmo = element.refillAmmo(this.storedAmmo);
      } else if (
        element.isPriority() === false &&
        this.storedAmmo > element.ammunition
      ) {
        this.storedAmmo = element.refillAmmo(this.storedAmmo);
      } else {
        console.log('There is no ammunition available.');
      }
    });
  }

  fight(carrier: Carrier): number {
    let sumDamage: number = 0;
    this.aircrafts.forEach((element) => {
      sumDamage = element.fights() + sumDamage;
    });
    return (carrier.health -= sumDamage);
  }

  getStatus(): void {
    if (this.health <= 0) {
      console.log("It's dead Jim :(");
    } else {
      let totalDamage: number = 0;
      this.aircrafts.forEach((element) => {
        totalDamage = totalDamage + element.ammunition * element.baseDamage;
      });

      console.log(
        'HP: ' +
          this.health +
          ', Aircraft count: ' +
          this.aircrafts.length +
          ', Ammo Storage: ' +
          this.storedAmmo +
          ', Total damage: ' +
          totalDamage
      );

      this.aircrafts.forEach((element) => {
        element.getStatus();
      });
    }
  }
}
