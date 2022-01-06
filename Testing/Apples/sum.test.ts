// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the toEqual() matcher to test the result of the created sum method
// Run it
// Create different tests where you test your method with:
// an empty list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed

import { Apple } from './apples';

describe('sum integers', () => {
  const apple1 = new Apple();
  test("should return undefined if array hasn't any element", () => {
    expect(apple1.sum([])).toEqual(undefined);
  });

  test('should return the first element if array has only one element', () => {
    expect(apple1.sum([3])).toEqual(3);
  });

  test('should sum all elements in an array', () => {
    expect(apple1.sum([1, 2, 3])).toEqual(6);
  });
});
