function solution(data) {
  const collection = data.split('\n').map(item => parseInt(item));
  let previousValue = collection[0];
  let result = 0;

  for(let i = 1; i < collection.length; i++) {
    if (previousValue < collection[i]) {
      result += 1;
    }

    previousValue = collection[i];
  }

  return result;
}

function solution2(data) {
  const collection = data.split('\n').map(item => parseInt(item));
  let previousValue = collection[0] + collection[1] + collection[2];
  let result = 0;

  for(let i = 1; i < collection.length - 2; i++) {
    const currentvalue = collection[i] + collection[i + 1] + collection[i + 2]
    console.log(currentvalue)
    if (previousValue < currentvalue) {
      result += 1;
    }

    previousValue = currentvalue;
  }

  return result;
}

const fs = require('fs')

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(solution2(data));
})