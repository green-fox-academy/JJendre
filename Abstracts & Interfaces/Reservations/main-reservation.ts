import { Booking } from './booking';
let booking1 = new Booking();
let booking2 = new Booking();
let booking3 = new Booking();
let booking4 = new Booking();

console.log(
  `${
    booking1.name
  } ${booking1.getCodeBooking()} for ${booking1.getDowBooking()}`
);
console.log(
  `${
    booking2.name
  } ${booking2.getCodeBooking()} for ${booking2.getDowBooking()}`
);
console.log(
  `${
    booking3.name
  } ${booking3.getCodeBooking()} for ${booking3.getDowBooking()}`
);
console.log(
  `${
    booking4.name
  } ${booking4.getCodeBooking()} for ${booking4.getDowBooking()}`
);
