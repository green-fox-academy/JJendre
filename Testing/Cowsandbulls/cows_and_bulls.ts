class Cab {
  digit: number = 0;
  randomdigitArray: number[] = [];
  numberFromUser: number = 0;
  guesses: number = 0;
  cows: number = 0;
  bulls: number = 0;

  random4Digits(): Array<number> {
    this.digit = Math.floor(1000 + Math.random() * 9000);
    let digitString = this.digit.toString().split('');
    let randomdigitArray = digitString.map(Number);
    return randomdigitArray;
  }
  check(numberFromUser: number) {
    this.counter();
    this.randomdigitArray = this.random4Digits();
    let fourDigitArray: number[] = numberFromUser
      .toString()
      .split('')
      .map(Number);

    if (numberFromUser < 1000 || numberFromUser > 9999) {
      return 'please add a 4 digit number';
    }
    for (let i = 0; i < fourDigitArray.length; i++) {
      if (fourDigitArray[i] === this.randomdigitArray[i]) {
        this.cows += 1;
      } else if (this.randomdigitArray.includes(fourDigitArray[i])) {
        console.log(this.randomdigitArray[i]);
        console.log(fourDigitArray);
        console.log(this.randomdigitArray.includes(fourDigitArray[i]));
        this.bulls += 1;
      }
    }
    return (
      'Result from: ' +
      this.digit +
      ' is: ' +
      this.cows +
      ' cow, ' +
      this.bulls +
      ' bull'
    );
  }

  counter(): number {
    return (this.guesses += 1);
  }
}
let guess = new Cab();

console.log(guess.check(8888));
console.log(guess.check(8888));
console.log(guess.check(8888));
console.log(guess.check(8888));

console.log(guess.guesses);

console.log([4, 5, 6].includes(4));
