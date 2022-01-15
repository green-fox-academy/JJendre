import { Cab } from './cows_and_bulls';

describe('Cows and bulls test', () => {
  test('generate random 4 digits', function () {
    const guess1 = new Cab();
    const random1 = guess1.random4Digits();
    const random2 = guess1.random4Digits();

    expect(random1).toBeInstanceOf(Array);
    expect(random1.length).toEqual(4);

    expect(random2).toBeInstanceOf(Array);
    expect(random2.length).toEqual(4);
    expect(random1).not.toEqual(random2);
  });
  test('Guess the 4 digits and check how many cows and bulls are ', function () {
    const guess1 = new Cab();
    guess1.digit = 1234;
    guess1.random4Digits = jest.fn().mockReturnValue([1, 2, 3, 4]);
    expect(guess1.check(1125)).toBe(
      'From random: 1234 The result is: 1 cow, 1 bull'
    );
  });
  test('check counter function it should be 1', function () {
    const guess1 = new Cab();
    expect(guess1.counter()).toBe(1);
  });

  test('status function', function () {
    const guess1 = new Cab();
    guess1.random4Digits = jest.fn().mockReturnValue([1, 2, 3, 4]);
    guess1.check(8888);
    expect(guess1.status()).toEqual([[0, 8888]]);
  });
});
