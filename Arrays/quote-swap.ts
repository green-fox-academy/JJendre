// Accidentally I messed up this quote from Richard Feynman
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// To do this: create a method called "swapQuote()"

// Also, log the sentence to the console with spaces in between

let words: string[] = [
  "What",
  "I",
  "do",
  "create,",
  "I",
  "cannot",
  "not",
  "understand.",
];
let original: string[] = [
  "What",
  "I",
  "cannot",
  "create",
  "I",
  "do",
  "not",
  "understand.",
];
function swapQuote(text: Array<string>) {
  for (let i = 0; i < text.length; i++)
    if (text[i] !== original[i]) text.splice(i, 1, original[i]);
  return text.join(", ");
}

console.log('"' + swapQuote(words) + '"');
// Expected output: "What I cannot create I do not understand."
