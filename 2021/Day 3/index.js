function solution(data) {
  const collection = data.split('\n').map(item => item.split(''));
  let result = [];
  let index = { 0: 0, 1: 0 };

  for(let i = 0; i < collection[0].length; i++) {
    for (let j = 0; j < collection.length; j++) {
      let symbol = collection[j][i];

      index[symbol] += 1;
    }

    if (index[0] > index[1]) {
      result.push(0);
    } else {
      result.push(1);
    }

    index = { 0: 0, 1: 0 };
  }

  let value = parseInt(result.join(''), 2);
  let value2 = parseInt(result.map(item => item === 1 ? 0 : 1).join(''), 2);
  return value * value2;
}

function solution2(data) {

}

const fs = require('fs')

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(solution(data));
})
