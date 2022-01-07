import { areAnagram } from './anagram';

describe('test if two strings are anagram or not', () => {
  test('should return fals if two strings has different length ', () => {
    expect(areAnagram('different', 'diffe')).toBe(false);
  });

  test('should return fals if the strings has different letters', () => {
    expect(areAnagram('egy', 'ketto')).toEqual(false);
  });

  test('should return true if the strings ara anagram ', () => {
    expect(areAnagram('anagram', 'margana')).toEqual(true);
  });
});
