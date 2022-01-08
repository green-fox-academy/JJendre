//console.log("greenfox".replace("e", "x"));
//const regex = /e/i; // vagy g betű gi akkor a kis és nagy betűket is megtalálja
//console.log("greenfox".replace(regex, "x"));
//console.log("greenfox".split("e")[2]);

//console.log("greenfox".split("e")); // vagy az e helyett . és akkor a pontok mentén választja szét
//console.log(szoveg).split(". ").join(("!"));
//console.log("greenfox".substr(2, 2)); // ha (1,0) akkor üres lesz HA (-1,1) akkor hátulról lesz az utolsó karakter
//console.log("greenfox".charAt(6));
//console.log("greenfox".concat("Fox")); // hozzáfűzi a megadott karaktereket
let user = {
  name: "Endre",
  height: 190,
  email: "jakabe@mail.com",
  children: ["Eszti", "Bali", "Beni"],
  sayHello: function () {
    console.log("Helo");
  },
};
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(user.hasOwnProperty("name")); // ???
//console.log(user);
let myObject: any = new Object({
  name: "John",
  height: 190,
});

Object.defineProperty(myObject, "name", { value: "Kalr", writable: false });

let a, b, rest;
[a, b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 30, 40];

let c = 20;
let d = 30;
[c, d] = [d, c];
let f = 45;
[c, d, f] = [c, d, d];

//reference vs. value
//primitív tipusok  string number boolean
//referencia típus array, object
//object.assign lemásol egy pbjectet
let reference = [1, 2, 3];
const referencecopy = [...reference]; // nem változik meg az eredeti
