function solution(data) {
  const lines = data.split('\n');
  let result = 0;
  let firstNumber = -1;
  let secondNumber = -1;

  lines.forEach((line) => {
    for (let i = 0; i < line.length; i++) {
      if (!isNaN(parseInt(line[i], 10))) {
        firstNumber = line[i];
        break;
      }
    }

    for (let j = line.length - 1; j >= 0; j--) {
      if (!isNaN(parseInt(line[j], 10))) {
        secondNumber = line[j];
        break;
      }
    }

    result += parseInt(firstNumber + secondNumber, 10);
  });
  return result;
}
function solution2(data) {
  const lines = data.split('\n');
  let result = 0;
  let firstNumber;
  let secondNumber;

  const numberCollection = [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ];
  const numberValues = {
    'one': 1, 'two' : 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
  };

  lines.forEach((line) => {
    firstNumber = undefined;
    secondNumber = undefined;

    for (let i = 0; i < line.length; i++) {
      if (!isNaN(parseInt(line[i], 10))) {
        firstNumber = line[i];
        break;
      } else {
        numberCollection.forEach((number) => {
          if (line.substring(i, line.length).indexOf(number) === 0) {
            firstNumber = numberValues[number];
          }
        });

        if (firstNumber) {
          break;
        }
      }
    }

    for (let j = line.length; j >= 0; j--) {
      if (!isNaN(parseInt(line[j], 10))) {
        secondNumber = line[j];
        break;
      } else {
        numberCollection.forEach((number) => {
          if (line.substring(0, j).lastIndexOf(number) === line.substring(0, j).length - number.length && line.substring(0, j).indexOf(number) !== -1) {
            secondNumber = numberValues[number];
          }
        });

        if (secondNumber) {
          break;
        }
      }
    }
    result += parseInt(`${firstNumber}${secondNumber}`, 10);
  });

  return result;
}

// const fs = require('fs')
//
// fs.readFile('./input.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(solution2(data));
// })

console.log(solution2('sq5fivetwothree1\n' +
  'six5gc\n' +
  'txb3qfzsbzbxlzslfourone1vqxgfive\n' +
  '3onethreebrth\n' +
  'cseven7nqqxnkzngndtddfiverkxkxqjjsr\n' +
  '2lvpmzh4\n' +
  'threeqxqndvjrz15'))


