export class Apple {
  name: string = '';

  getApple(nameOfApple: string): string {
    this.name = nameOfApple;
    return this.name;
  }

  sum(list: Array<number>): number {
    try {
      let sum = list.reduce(function (a, b) {
        return a + b;
      });
      return sum;
    } catch {
      return undefined;
    }
  }
}

let ap1 = new Apple();
console.log(ap1.sum([]));
