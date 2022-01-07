// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys,
// and numbers as values that shows how many occurrences there are.
// Create a test for that.

export function countLetters(str: string) {
  const sampleArray: string[] = str.split('');
  const dictionary: any = {};

  sampleArray.forEach(function (x) {
    dictionary[x] = (dictionary[x] || 0) + 1;
  });
  return dictionary;
}

console.log(countLetters('superkalifragilisticexpialidocious'));
