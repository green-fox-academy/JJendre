import { countLetters } from './count_letters';

describe('count the letters', () => {
  test('should return  a dictionary that shows how many occurrences each letters have ', () => {
    expect(countLetters('different')).toEqual({
      d: 1,
      i: 1,
      f: 2,
      e: 2,
      r: 1,
      n: 1,
      t: 1,
    });
  });
});
