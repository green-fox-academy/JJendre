// Check out the folder. There's a work file and a test file.
// run `yarn install` once to get the npm packages (downloading jest and other packages).
// you can run `yarn test` to test your work

//  -  Run the tests, all 10 should be green (passing).
//  -  The implementations though are not quite good.
//  -  Create tests that'll fail, and will show how the implementations are wrong(You can assume that the implementation of join and split are good)
//  -  After creating the tests, fix the implementations
//  -  Check again, if you can create failing tests
//  -  Implement if needed

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else return c;
}

export function median(pool: number[]): number {
  if (pool.length === 0) throw new Error('No inputs');

  pool.sort(function (a, b) {
    return a - b;
  });
  const half = Math.floor(pool.length / 2);
  if (pool.length % 2) return pool[half];

  return (pool[half - 1] + pool[half]) / 2.0;
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some((vowel) => vowel === character);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length - 1; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}
// console.log(isVowel('e'));
// console.log(translate('bemutatkozik'));
