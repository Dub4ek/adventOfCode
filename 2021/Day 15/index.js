function solution(data) {
  const collection = data.split('\n').map(item => item.split('').map(item => +item));
  let i, j = 0;
  const maxI = collection.length;
  const maxJ = collection[0].length;
  const start = [0, 0];
  let result = 0;

  while(i < maxI && j < maxJ) {
    if (i + 1 < maxI)
  }

  return result;
}

const fs = require('fs')


/*fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(solution(data));
})*/

console.log(solution('1163751742\n' +
  '1381373672\n' +
  '2136511328\n' +
  '3694931569\n' +
  '7463417111\n' +
  '1319128137\n' +
  '1359912421\n' +
  '3125421639\n' +
  '1293138521\n' +
  '2311944581'))

