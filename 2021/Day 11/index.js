function solution(data) {
  const collection = data.split('\n').map(item => item.split('').map(number => parseInt(number, 10)));
  let count = 0;
  let noNineHere = true;
  let flashCount = 0;

  while(count < 2) {
    for (let i = 0; i < collection.length; i++) {
      for (let j = 0; j < collection[i].length; j++) {
        collection[i][j] += 1;

        if (collection[i][j] >= 9) {
          noNineHere = true;
        }
      }
    }

    while (noNineHere) {
      for (let i = 0; i < collection.length; i++) {
        for (let j = 0; j < collection[i].length; j++) {
          if (collection[i][j] >= 9) {
            flashCount++;
            makeFlashing(i, j, collection);
          }

          if (!noNineHere && collection[i][j] >= 9) {
            noNineHere = true;
          } else {
            noNineHere = false;
          }
        }
      }
    }
    console.log(collection)
    count++;
  }

  return flashCount;
}

function makeFlashing(i, j, collection) {
  const coll = setArrValue(collection);

  coll(i + 1, j);
  coll(i - 1, j);
  coll(i, j + 1);
  coll(i, j - 1);
  coll(i + 1, j + 1);
  coll(i - 1, j - 1);
  coll(i - 1, j + 1);
  coll(i + 1, j - 1);
  collection[i][j] = 0;
}

function setArrValue(collection) {
  return function(i, j) {
    if (collection[i] !== undefined && collection[i][j]) {
      collection[i][j] += 1;
    }
  }
}

function solution2(data) {

}

const fs = require('fs')


/*fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(solution(data));
})*/


console.log(solution('11111\n' +
  '19991\n' +
  '19191\n' +
  '19991\n' +
  '11111'))

