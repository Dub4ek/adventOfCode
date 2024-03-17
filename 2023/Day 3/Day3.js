function solution(data) {
  const lines = data.split('\n').map(item => item.split(''));
  let result = 0;

  for(let i = 0; i < lines.length; i++) {
    let number = '';
    let isValid = false;

    for (let j = 0; j < lines[i].length; j++) {
      let element = lines[i][j];
:wq

      if (!isNaN(parseInt(element, 10))) {
        number+= element;
        isValid ||= isSymbolNearBy(i, j, lines);
      } else if(number) {
        console.log(number, isValid)
        if (isValid) {
          result += parseInt(number, 10);
        }

        number = '';
        isValid = false;
      }
    }
  }

  return result;
}

function isSymbolNearBy(i, j, arr) {
  return [arr[i - 1]?.[j],
  arr[i - 1]?.[j - 1],
  arr[i - 1]?.[j + 1],
  arr[i + 1]?.[j],
  arr[i + 1]?.[j + 1],
  arr[i + 1]?.[j - 1],
  arr[i]?.[j - 1],
  arr[i]?.[j + 1]].filter((item) => item !== undefined && item !== '.' && isNaN(parseInt(item))).length > 0;
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


// console.log(solution(
//   '467..114..\n' +
//   '...*......\n' +
//   '..35..633.\n' +
//   '......#...\n' +
//   '617*......\n' +
//   '.....+.58.\n' +
//   '..592.....\n' +
//   '......755.\n' +
//   '...$.*....\n' +
//   '.664.598..'))



