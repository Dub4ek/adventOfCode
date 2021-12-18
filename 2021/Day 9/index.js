function solution(data) {
  const collection = data.split('\n').map(item => item.split('').map(item => parseInt(item, 10)));
  const result = [];

  function getItem(i, j, collection) {
    if (collection[i] !== undefined && collection[i][j] !== undefined) {
      return collection[i][j];
    }
    return null;
  }

  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < collection[i].length; j++) {
      let item = collection[i][j];
      const neighbours = [
        getItem(i + 1, j, collection),
        getItem(i - 1, j, collection),
        getItem(i, j - 1, collection),
        getItem(i, j + 1, collection),
      ].filter(item => item !== null);
      if (Math.min.apply(null, [item, ...neighbours]) === item && !neighbours.includes(item)) {
        console.log(neighbours, item)
        result.push(item + 1);
      }
    }
  }

  return result.reduce((prev, cur) => prev + cur, 0);
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

/*

console.log(solution('2199943210\n' +
  '3987894921\n' +
  '9856789892\n' +
  '8767896789\n' +
  '9899965678'))*/
