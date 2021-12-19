import { Reservation } from './reservation';
import { Reservationy } from './reservationy';

let dowArray: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export class Booking extends Reservation implements Reservationy {
  constructor() {
    super(
      'Booking#',
      (Math.random() + 1).toString(36).substring(2).toUpperCase().slice(0, 8),
      dowArray[Math.floor(Math.random() * dowArray.length)]
    );
  }
  getDowBooking(): string {
    return this.dow;
  }
  getCodeBooking(): string {
    return this.code;
  }
}
