function solution(data) {
  const [pattern, empty,  ...collection] = data.split('\n');
  const mutations = collection.map(item => item.split(' -> '));
  const mutationsMap = new Map(mutations);
  let result = pattern;
  let temp = result.split('');
  let countAdded = 0;


  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < result.length; i += 1) {
      const firstLetter = result[i];
      const secondLetter = result[i + 1];

      if (secondLetter) {
        temp.splice(i + countAdded,
          2,
          ...(firstLetter + mutationsMap.get(firstLetter + secondLetter) + secondLetter).split(''));
        countAdded += 1;
      }
    }

    result = [...temp];
    countAdded = 0;
  }

  const counts = result.reduce((prev, cur) => {
    if (prev.hasOwnProperty(cur)) {
      prev[cur] += 1;
    } else {
      prev[cur] = 1;
    }

    return prev;
  }, {});

  return Math.max(...Object.values(counts)) - Math.min(...Object.values(counts))
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
console.log(solution('NNCB\n' +
  '\n' +
  'CH -> B\n' +
  'HH -> N\n' +
  'CB -> H\n' +
  'NH -> C\n' +
  'HB -> C\n' +
  'HC -> B\n' +
  'HN -> C\n' +
  'NN -> C\n' +
  'BH -> H\n' +
  'NC -> B\n' +
  'NB -> B\n' +
  'BN -> B\n' +
  'BB -> N\n' +
  'BC -> B\n' +
  'CC -> N\n' +
  'CN -> C'))*/

