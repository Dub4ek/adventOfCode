function solution(data) {
  const collection = data.split(',').map(item => parseInt(item, 10));
  let countDays = 0;

  while(countDays < 80) {
    for (let i = 0; i < collection.length; i++) {
      let item = collection[i];

      if (item > 0) {
        collection[i] -= 1;
      } else if (item === 0){
        collection[i] = 6;
        collection.push(9);
      }
    }
    countDays += 1;
  }

  return collection.length;
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

//console.log(solution('3,4,3,1,2'));