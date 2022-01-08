// Create a function called "appendA()" that adds "a" to every string in the "animals" list
// The parameter should be a list

let animals: string[] = [
  "koal",
  "pand",
  "zebr",
  "anacond",
  "bo",
  "chinchill",
  "cobr",
  "gorill",
  "hyen",
  "hydr",
  "iguan",
  "impal",
  "pum",
  "tarantul",
  "pirahn",
];
function appendA(L: any) {
  let animalsappenda: string[] = [];
  for (let i = 0; i < L.length; i++) {
    animalsappenda.push(L[i] + "a");
  }
  animals = animalsappenda;
  console.log(animals);
}
appendA(animals);
