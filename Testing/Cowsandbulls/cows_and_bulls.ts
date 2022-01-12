export class Cab {
  digit: number = 0;
  randomdigitArray: any[] = [];
  numberFromUser: number = 0;
  guesses: number = 0;
  cows: number = 0;
  bulls: number = 0;
  nowplaying: string = '';
  played: number[][] = [];

  random4Digits(): Array<number> {
    this.digit = Math.floor(1000 + Math.random() * 9000);
    let digitString = this.digit.toString().split('');
    let randomdigitArray = digitString.map(Number);
    return randomdigitArray;
  }
  check(numberFromUser: number) {
    this.randomdigitArray = this.random4Digits();
    this.numberFromUser = numberFromUser;
    this.nowplaying = this.digit + ' / ' + this.numberFromUser;
    let currentPlayArray: number[] = [this.digit, this.numberFromUser];
    this.played.push(currentPlayArray);

    this.cows = 0;
    this.bulls = 0;
    this.counter();
    let fourDigitArray: any[] = numberFromUser.toString().split('').map(Number);

    if (numberFromUser < 1000 || numberFromUser > 9999) {
      return 'please add a 4 digit number';
    }
    for (let i = 0; i < fourDigitArray.length; i++) {
      if (fourDigitArray[i] === this.randomdigitArray[i]) {
        this.cows += 1;
        fourDigitArray[i] = NaN;
      } else {
        let count = 0;
        for (var j = 0; j < fourDigitArray.length; j++) {
          if (fourDigitArray[j] === this.randomdigitArray[i]) {
            this.randomdigitArray[i] = NaN;
            count++;
          }
        }
        this.bulls = this.bulls + count;
      }
    }
    return (
      'From random: ' +
      this.digit +
      ' The result is: ' +
      this.cows +
      ' cow, ' +
      this.bulls +
      ' bull'
    );
  }
  counter(): number {
    return (this.guesses += 1);
  }
  status() {
    console.log('Now playing: [' + this.nowplaying + '] ');
    console.log('played');
    return this.played;
  }
}

let cow1 = new Cab();
console.log(cow1.random4Digits());
