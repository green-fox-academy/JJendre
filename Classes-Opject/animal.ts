// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// When creating a new animal instance these values must be set to the default 50 value
// Every animal can eat() which decreases its hunger by one
// Every animal can drink() which decreases its thirst by one
// Every animal can play() which increases both its hunger and thirst by one
export class Animal {
  public hunger: number;
  public thirst: number;

  constructor(hunger: number = 50, thirst: number = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }
  public eat() {
    return this.hunger--;
  }
  public getHunger() {
    return this.hunger++;
  }
  public drink() {
    return this.thirst--;
  }

  public getThirst() {
    return this.thirst++;
  }

  public play() {
    return this.hunger++, this.thirst++;
  }
}
let dog = new Animal();
dog.drink();
dog.play();
dog.eat();
dog.eat();
console.log(dog);
let cat = new Animal();
cat.play();
cat.play();
cat.play();
cat.play();
console.log(cat);
