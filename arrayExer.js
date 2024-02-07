let x = [0, 0, 1, 2, 1, 3, 3, 5, 5, 6, 7]; //gets 2
let y = [1, 1, 1, 2, 2, 3, 3, 4, 4, 9]; //gets 9

let uniqueNumsInX = [];
let uniqueNumsInY = [];

for (let a = 0; a <= x.length; a++) {
  let numOfDuplis = 0;

  for (let b = 0; b < x.length; b++) {
    if (x[a] === x[b]) {
      numOfDuplis++;
    }
  }

  if (numOfDuplis === 1) {
    uniqueNumsInX.push(x[a]);
  }

  if (a === x.length - 1) {
    console.log(uniqueNumsInX);
  }
}

for (let a = 0; a < y.length; a++) {
  let numOfDuplis = 0;

  for (let b = 0; b < y.length; b++) {
    if (y[a] === y[b]) {
      numOfDuplis++;
    }
  }

  if (numOfDuplis === 1) {
    uniqueNumsInY.push(y[a]);
  }

  if (a === y.length - 1) {
    console.log(uniqueNumsInY);
  }
}
