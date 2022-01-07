import { fibonacci } from './fibonacci';

describe('computes a member of the fibonacci sequence by a given index', () => {
  test('at zero should return 0 ', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('at 1 should return 1', () => {
    expect(fibonacci(1)).toEqual(1);
  });

  test('at 2 should return 1', () => {
    expect(fibonacci(2)).toEqual(1);
  });

  test('at 3 should return 2', () => {
    expect(fibonacci(3)).toEqual(2);
  });

  test('at 4 should return 3', () => {
    expect(fibonacci(4)).toEqual(3);
  });

  test('at 6 should return 8', () => {
    expect(fibonacci(6)).toEqual(8);
  });

  test('at 10 should return 55', () => {
    expect(fibonacci(10)).toEqual(55);
  });
});
