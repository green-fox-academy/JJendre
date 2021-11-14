function JosephusProblem(n: any) {
  let nArray: any = [];
  for (let i = 1; i <= n; i++) {
    nArray.push(i);
  }
  let x = nArray.length;

  for (let i = 0; i < x - 1; i++) {
    nArray = nArray.concat(nArray[0]);
    nArray.shift();
    nArray.shift();
  }
  console.log("The winner seat is: ");
  return nArray;
}
console.log(JosephusProblem(41));
