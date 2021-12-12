function solution(data) {
  const collection = data.split('\n').map(item => item.split(' '));
  let values = [0, 0];

  for(let i = 0; i < collection.length; i++) {
    let [command, value] = collection[i];

    if (command === 'forward') {
      values[0] += parseInt(value);
    } else if (command === 'down') {
      values[1] += parseInt(value);
    } else if (command === 'up') {
      values[1] -= parseInt(value);
    }
  }

  return values[0] * values[1];
}

function solution2(data) {
  const collection = data.split('\n').map(item => item.split(' '));
  let values = [0, 0];
  let aim = 0;

  for(let i = 0; i < collection.length; i++) {
    let [command, value] = collection[i];

    if (command === 'forward') {
      values[0] += parseInt(value);
      values[1] += aim * parseInt(value);
    } else if (command === 'down') {
      aim += parseInt(value);
    } else if (command === 'up') {
      aim -= parseInt(value);
    }
  }

  return values[0] * values[1];
}

const fs = require('fs')

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(solution2(data));
})

//console.log(solution2('forward 5\ndown 5\nforward 8\nup 3\ndown 8\nforward 2'))