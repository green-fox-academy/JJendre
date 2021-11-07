//Create a list ('List A') which contains the following values
//Apple, Avocado, Blueberries, Durian, Lychee
let List_A: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];
console.log(List_A);

//Create a new list ('List B') with the values of List A
let List_B: string[] = [];
List_B = List_A.slice(0);
console.log(List_B);

//Print out whether List A contains "Durian" or not
if (List_A.indexOf("Durian") >= 0) {
  console.log(
    "List_A contains 'Durian' at position: " + List_A.indexOf("Durian")
  );
} else {
  console.log("List_A dosn'/'t contain 'Durian'");
}

//Remove "Durian" from List B
List_B.splice(3, 1);
console.log(List_B);

//Add "Kiwifruit" to List A after the 4th element
List_A.splice(4, 0, "Kiwifruit");
console.log(List_A);

//Compare the size of List A and List B
console.log(
  "Is List_A bigger than List_B?: " + (List_A.length > List_B.length)
);

//Get the index of "Avocado" from List A
console.log("Index of Avocado in List_A: " + List_A.indexOf("Avocado"));

//Get the index of "Durian" from List B
if (List_B.indexOf("Durian") >= 0) {
  console.log("Index of Durian in List_B: " + List_A.indexOf("Durian"));
} else {
  console.log("List_B doesn't contain 'Durian'.");
}

//Add "Passion Fruit" and "Pomelo" to List B in a single statement
List_B.splice(List_B.length, 0, "Passion Fruit & Pomelo");
console.log(List_B);

//Print out the 3rd element from List A
console.log("The 3rd element from List A is:  " + List_A[2]);
