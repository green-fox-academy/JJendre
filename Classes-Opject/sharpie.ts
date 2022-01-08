// Create a Sharpie class
// We should know the followings about each sharpie:
// color (which should be a string),
// width (which will be a string) and the
// inkAmount (number)
// We need to specify the color and the width at creation
// Every sharpie is created with a default inkAmount value: 100
// We can use() the sharpie objects: using it decreases inkAmount by 10

export class Sharpie {
  public color: string;
  public width: string;
  public inkAmount: number;

  constructor(color: string, width: string, inkAmount: number = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }
  public use() {
    return (this.inkAmount -= 10);
  }
  public getInkAmount() {
    return (this.inkAmount += 0);
  }
}
let Sharpie1 = new Sharpie('green', '5');
Sharpie1.use();
Sharpie1.use();
console.log(Sharpie1);
