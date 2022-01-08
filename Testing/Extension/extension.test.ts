import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and 3 is 5', function () {
  expect(add(2, 3)).toEqual(5);
});

test('add: 1 and 4 is 5', function () {
  expect(add(1, 4)).toEqual(5);
});

test('max of 1,2,3 should be: 3', function () {
  expect(maxOfThree(1, 2, 3)).toEqual(3);
});

test('max of 5,9,4 should be: 9', function () {
  expect(maxOfThree(5, 9, 4)).toEqual(9);
});

test('median of [7,5,3,5] should be 5', function () {
  expect(median([7, 5, 3, 5])).toEqual(5);
});

test('median of [1,2,3,4,5] should be 3', function () {
  expect(median([1, 2, 3, 4, 5])).toEqual(3);
});

test('is vowel: a', function () {
  expect(isVowel('a')).toBeTruthy();
});

test('is vowel: u', function () {
  expect(isVowel('u')).toBeTruthy();
});

test('is vowel: k', function () {
  expect(isVowel('k')).toBeFalsy();
});

test('translate: bemutatkozik', function () {
  expect(translate('bemutatkozik')).toEqual('bevemuvutavatkovozivik');
});

test('translate: lagopus', function () {
  expect(translate('lagopus')).toEqual('lavagovopuvus');
});
