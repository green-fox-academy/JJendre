import { addNum, divide, isPrime } from './math';

test('adds 1 + 2 to equal 3', () => {
  expect(addNum(1, 2)).toBe(3);
});

test('divide number by 0 throws error', () => {
  expect(() => {
    divide(9, 0);
  }).toThrow(Error('Unable to divide by 0'));
});

test('number 17 is Prime', () => {
  expect(isPrime(17)).toBe(true);
});
