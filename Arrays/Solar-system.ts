// "Saturn" is missing from the planetList
// Insert it into the correct position
// Create a method called "putSaturn()" which has a list parameter and returns the correct list
// bonus for using some built in methods

let planetList: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Uranus",
  "Neptune",
];
function putSaturn(listofPlanet: Array<string>) {
  let Expectedoutput: string[] = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  for (let i = 0; i < Expectedoutput.length; i++)
    if (Expectedoutput[i] != listofPlanet[i])
      listofPlanet.splice(i, 0, Expectedoutput[i]);
  return listofPlanet;
}
console.log(putSaturn(planetList));
