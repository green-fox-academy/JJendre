// Create a Reservation class by implementing all the features as required by the interface.
// The booked reservations should look like the output below.
// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
// Also, the DOW is randomly ordered to the bookings from an array.
// DOW stands for Day of the Week (MON, TUE, etc.)

export abstract class Reservation {
  name: string = 'Booking#';
  code: string;
  dow: string;
  constructor(name: string, code: string, dow: string) {
    this.name = name;
    this.code = code;
    this.dow = dow;
  }
}
