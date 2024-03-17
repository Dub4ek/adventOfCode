function solution(data) {
  const lines = data.split('\n');
  let result = 0;
  let gameValues;

  lines.forEach((item, i) => {
    const gameNumber = i + 1;
    gameValues = item.split(':')[1].split(';');
    let iterationValue;
    let isValueValid = true;

    for (let j = 0; j < gameValues.length; j++) {
      iterationValue = gameValues[j].split(',');
      isValueValid = true;
      let k = 0;

      while(isValueValid && k < iterationValue.length) {
        const value = iterationValue[k].trim();

        if (value.includes('green')) {
          isValueValid &= parseInt(value.split(' ')[0]) <= 13;
        } else if (value.includes('red')) {
          isValueValid &= parseInt(value.split(' ')[0]) <= 12;
        } else if (value.includes('blue')) {
          isValueValid &= parseInt(value.split(' ')[0]) <= 14;
        }

        k++;
      }

      if (!isValueValid) {
        break;
      }
    }

    if (isValueValid) {
      result += gameNumber;
    }
  });

  return result;
}

function solution2(data) {
  const lines = data.split('\n');
  let result = 0;
  let gameValues;

  lines.forEach((item, i) => {
    const gameNumber = i + 1;
    gameValues = item.split(':')[1].split(';');

    let iterationValue;
    let maxGreen = -1;
    let maxRed = -1;
    let maxBlue = -1;

    for (let j = 0; j < gameValues.length; j++) {
      iterationValue = gameValues[j].split(',');

      let k = 0;

      while(k < iterationValue.length) {
        const value = iterationValue[k].trim();

        if (value.includes('green')) {
          maxGreen = Math.max(maxGreen, parseInt(value.split(' ')[0]));
        } else if (value.includes('red')) {
          maxRed = Math.max(maxRed, parseInt(value.split(' ')[0]));
        } else if (value.includes('blue')) {
          maxBlue = Math.max(maxBlue, parseInt(value.split(' ')[0]));
        }

        k++;
      }
    }
    result += maxGreen * maxRed * maxBlue;
  });

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


console.log(solution2(
  'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n' +
  'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n' +
  'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n' +
  'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n' +
  'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'))



