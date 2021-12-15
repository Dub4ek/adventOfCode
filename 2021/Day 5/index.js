function solution(data) {
  let maxX = 0;
  let maxY = 0;
  const collection = data.split('\n')
          .map(item => item.split('->').map(item => item.split(',').map(element => parseInt(element)))
        )
        .filter(item => {
          const [x0, y0] = item[0];
          const [x1, y1] = item[1];

          return x0 === x1 || y0 === y1;
        })
  collection.forEach(item => {
    const [x0, y0] = item[0];
    const [x1, y1] = item[1];

    if (x0 > maxX) {
      maxX = x0;
    }

    if (x1 > maxX) {
      maxX = x1;
    }

    if (y0 > maxY) {
      maxY = y0;
    }

    if (y1 > maxY) {
      maxY = y1;
    }
  })
  const result = Array.from({ length : maxX + 1 }).map(item => Array.from({ length: maxY + 1 }).map(item => 0));
  collection.forEach(item => {
    let [x0, y0] = item[0];
    let [x1, y1] = item[1];

    if (x0 === x1) {
      if (y0 > y1) {
        while(y1 <= y0) {
          result[x0][y1] += 1;
          y1 += 1;
        }
      } else if (y1 > y0) {
        while(y0 <= y1) {
          result[x0][y0] += 1;
          y0 += 1;
        }
      }
    } else if (y0 === y1) {
      if (x0 > x1) {
        while(x1 <= x0) {
          result[x1][y1] += 1;
          x1 += 1;
        }
      } else if (x1 > x0) {
        while(x0 <= x1) {
          result[x0][y1] += 1;
          x0 += 1;
        }
      }
    }
  });

  let finalCount = 0;
  result.forEach(item => {
    finalCount += item.filter((number) => number > 1).length;
  });

  return finalCount;
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

