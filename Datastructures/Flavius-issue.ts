{
  let n = 13;
  let nArray: any = [];
  for (let i = 1; i <= n; i++) {
    nArray.push(i);
  }
  //console.log(nArray);
  let x = nArray.length;

  for (let i = 0; i < x - 1; i++) {
    nArray = nArray.concat(nArray[0]);
    nArray.shift();
    nArray.shift();
  }

  console.log(nArray);
}
