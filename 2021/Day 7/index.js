function solution(data) {
  const collection = data.split(',').map(item => parseInt(item, 10));
  let result = [];
  let [firstItem] = collection;
  let value = 0;

  while(firstItem > 0) {
    for (let i = 0; i < collection.length; i++) {
      value += Math.abs(firstItem - collection[i])
    }
    result.push(value);
    value = 0;
    firstItem--;
  }

  return Math.min.apply(null, result);
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

//console.log(solution('16,1,2,0,4,2,7,1,2,14'));