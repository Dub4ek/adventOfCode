function solution(data) {
  const collection = data.split('\n').map(item => item.split('|')[1].split(' '));
  let result = 0;
  const LENGTHS = [2, 4, 3, 7];

  collection.forEach(item => {
    result += item.filter(element => LENGTHS.includes(element.length)).length;
  });

  return result;
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