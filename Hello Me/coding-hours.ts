// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
let hours:number=6;
let weeks:number=17;
let totalhours=hours*weeks*5;
console.log('How many hours is spent with coding in a semester by an attendee='+totalhours+'h');
let percentage=Math.round((30/52)*100);
console.log('Percentage of the coding hours in the semester='+percentage+'%');
