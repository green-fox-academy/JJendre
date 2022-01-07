// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

export function areAnagram(str1: string, str2: string): boolean {
  if (str1.length != str2.length) return false;

  const arr1: string[] = str1.split('');
  const arr2: string[] = str2.split('');
  const ascendingArr1: string[] = arr1.sort((a: string, b: string) =>
    a > b ? 1 : -1
  );
  const ascendingArr2: string[] = arr2.sort((a: string, b: string) =>
    a > b ? 1 : -1
  );
  for (let i = 0; i < ascendingArr1.length; i++)
    if (ascendingArr1[i] != ascendingArr2[i]) return false;
  return true;
}

console.log(areAnagram('expres', 'xepers'));
