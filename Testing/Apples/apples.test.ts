// Create a class with one method (eg. getApple()) that returns a string (eg. 'apple')
// Create a test for that:
// Create a test file
// Create a test method
// Instantiate an Object from your class in the method
// Use the toEqual() matcher
// The expected parameter should be the same string (eg. 'apple')
// The actual parameter should be the return value of the method (eg. myobject.getApple())
// Run the test
// Change the expected value to make the test failing
// Run the test
// Fix the returned value to make the test succeeding again

import { Apple } from './apples';

describe('getApple', () => {
  test('should instantiate a new apple', () => {
    const apple1 = new Apple();
    apple1.getApple('apple');
    expect(apple1.name).toBe('apple');
    expect(apple1.getApple('apple')).toEqual('apple');
  });
});
