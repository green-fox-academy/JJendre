export abstract class Vehicle {
  typeOfVehicle: string;
  speedOfVehicle: number;
  numberOfengines: number;
  constructor() {
    this.typeOfVehicle = '';
    this.speedOfVehicle = 0;
    this.numberOfengines = 0;
  }
}
