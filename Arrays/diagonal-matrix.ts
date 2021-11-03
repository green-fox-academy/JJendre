// - Create a two dimensional list dynamically with the following content.
//   Note that a two dimensional list is often called matrix if every
//   internal list has the same length.
//   Use a loop!
//   1 0 0 0
//   0 1 0 0
//   0 0 1 0
//   0 0 0 1
//   Its length should depend on a variable
// - Print this two dimensional list to the output
{
  let n: number = 10;
  let list: number[] = [];
  for (let j = 0; j < n; j++) {
    list.push(0);
  }
  let matrix: number[][] = [];
  for (let i = 0; i < n; i++) {
    list = list.map(function (item, index) {
      if (index == i) {
        return 1;
      } else {
        return 0;
      }
    });
    matrix.push(list);
  }
  console.table(matrix);
}

// second solution:
console.log('Second solution with ".splice":');
{
  function diagonal_Matrix(sizeOfMatrix: number) {
    let arrfillwithnull = new Array(sizeOfMatrix).fill(
      new Array(sizeOfMatrix).fill(0)
    );
    let matrix: number[][] = [];
    for (let i = 0; i < arrfillwithnull.length; i++) {
      for (let j = 0; j < arrfillwithnull[i].length; j++) {
        if (i == j) {
          let cloneArr = arrfillwithnull[i].slice(0);
          cloneArr.splice(i, 1, 1);
          matrix.push(cloneArr);
        }
      }
    }
    console.log(matrix);
  }
  diagonal_Matrix(5);
}
